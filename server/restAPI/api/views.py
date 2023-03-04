from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DiagnosedResultSerializer
from .models import DiagnosedResult
from .service.predictByModel import get_prediction as ml_model
from .service.predictByOntology import get_prediction as onto_model

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
def mlPredict(request):
    data = request.data
    result = {"prediction": ml_model.get_prediction(data["symptoms"])}
    return JsonResponse(result)

@api_view(['POST'])
def ontoPredict(request):
    data = request.data
    result = {"prediction": onto_model.get_prediction(data["symptoms"])}
    return JsonResponse(result)

@api_view(['GET'])
def diagnosesList(request):
    diagnoses = DiagnosedResult.objects.all()
    serializer = DiagnosedResultSerializer(diagnoses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def diagnosisDetail(request, pk):
    diagnosis = DiagnosedResult.objects.get(id=pk)
    serializer = DiagnosedResultSerializer(diagnosis, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def diagnosisCreate(request, pk):
    serializer = DiagnosedResultSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def diagnosisDelete(request, pk):
    diagnosis = DiagnosedResult.objects.get(id=pk)
    diagnosis.delete()
    return Response('Deleted')
