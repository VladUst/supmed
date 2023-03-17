from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DiagnosticResultSerializer, ICDBlockSerializer, ICDChapterSerializer
from .models import DiagnosticResult, ICDChapter, ICDBlock
from .service.predictByModel import get_prediction as ml_model
from .service.predictByOntology import get_prediction as onto_model
from .service.textHandler.NLPModel import NLPModel
from .service.umlsService.UMLSService import UMLSService
from .service.umlsService.icd_translate import get_icd_info


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/diagnoses-list/',
        'Detail View': 'diagnosis-detail/<str:pk>',
        'Create': 'diagnosis-create/',
        'Update': 'diagnosis-update/<str:pk>',
        'Delete': 'diagnosis-delete/<str:pk>',
    }
    return Response(api_urls)


@api_view(['POST'])
def processText(request):
    data = request.data
    result = {"entities": NLPModel.process_text(NLPModel, data["text"])}
    return JsonResponse(result)


@api_view(['POST'])
def predictDiseases(request):
    data = request.data
    result = {"ontologyPrediction": onto_model.get_prediction(data["symptoms"]),
              "mlPrediction": ml_model.get_prediction(data["symptoms"])}
    return JsonResponse(result)


@api_view(['POST'])
def diagnosisCreate(request):
    code, chapter, block, chapter_descr, block_descr = UMLSService.get_icd_info(UMLSService, request.data["diagnosis"])
    if not ICDChapter.objects.filter(name=chapter).exists():
        serializer = ICDChapterSerializer(data={
            "name": chapter,
            "description": chapter_descr
        })
        if serializer.is_valid():
            serializer.save()
    if not ICDBlock.objects.filter(name=block).exists():
        serializer = ICDBlockSerializer(data={
            "name": block,
            "description": block_descr,
            "chapter": chapter
        })
        if serializer.is_valid():
            serializer.save()
    req_data = request.data
    req_data["icd_code"] = code
    req_data["block"] = block
    serializer = DiagnosticResultSerializer(data=req_data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def blocksList(request, chapter_name):
    chapter = ICDChapter.objects.get(name=chapter_name)
    blocks = chapter.blocks.all()
    serializer = ICDBlockSerializer(blocks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def chaptersList(request):
    chapters = ICDChapter.objects.all()
    serializer = ICDChapterSerializer(chapters, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def diagnosesList(request, block_name):
    block = ICDBlock.objects.get(name=block_name)
    diagnoses = block.diagnoses.all()
    serializer = DiagnosticResultSerializer(diagnoses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def diagnosisDetail(request, pk):
    diagnosis = DiagnosticResult.objects.get(id=pk)
    serializer = DiagnosticResultSerializer(diagnosis, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
def diagnosisDelete(request, pk):
    diagnosis = DiagnosticResult.objects.get(id=pk)
    diagnosis.delete()
    return Response('Deleted')


@api_view(['POST'])
def mlPredict(request):
    data = request.data
    result = {"prediction": ml_model.get_prediction(data["symptoms"])}
    return JsonResponse(result)


@api_view(['POST'])
def ontoPredict(request):
    data = request.data
    result = {"prediction": onto_model.get_prediction(data["symptoms"])}
    return JsonResponse(result)
