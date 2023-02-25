from django.db import models


class DiagnosedResult(models.Model):
    date = models.CharField(max_length=10)
    doctor = models.CharField(max_length=50)
    symptoms = models.CharField(max_length=200)
    diagnosis = models.CharField(max_length=100)
    classification_code = models.CharField(max_length=10)
    classification_name = models.CharField(max_length=50)

    def __str__(self):
        return self.diagnosis
