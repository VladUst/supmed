from rest_framework import serializers
from .models import DiagnosticResult, ICDChapter, ICDBlock


class DiagnosticResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiagnosticResult
        fields = '__all__'


class ICDChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ICDChapter
        fields = '__all__'


class ICDBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ICDBlock
        fields = '__all__'
