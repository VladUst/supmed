from rest_framework import serializers
from .models import DiagnosedResult


class DiagnosedResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiagnosedResult
        fields = '__all__'
