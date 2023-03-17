from django.contrib import admin
from .models import DiagnosticResult, ICDChapter, ICDBlock
# Register your models here.
admin.site.register(ICDChapter)
admin.site.register(ICDBlock)
admin.site.register(DiagnosticResult)
