from django.db import models


class ICDChapter(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class ICDBlock(models.Model):
    name = models.CharField(max_length=10, primary_key=True)
    description = models.CharField(max_length=200)
    chapter = models.ForeignKey(ICDChapter, on_delete=models.CASCADE, related_name='blocks')

    def __str__(self):
        return self.name


class DiagnosticResult(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    doctor = models.CharField(max_length=50)
    symptoms = models.CharField(max_length=200)
    diagnosis = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    icd_code = models.CharField(max_length=10)
    block = models.ForeignKey(ICDBlock, on_delete=models.CASCADE, related_name='diagnoses')

    def __str__(self):
        return self.diagnosis
