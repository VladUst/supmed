from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('ml-predict/', views.mlPredict, name="ml-predict"),
    path('onto-predict/', views.ontoPredict, name="onto-predict"),
    path('predict-diseases/', views.predictDiseases, name="predict-diseases"),
    path('process-text/', views.processText, name="process-text"),
    path('diagnoses-list/', views.diagnosesList, name="diagnoses-list"),
    path('diagnosis-detail/<str:pk>/',
         views.diagnosisDetail, name="diagnosis-detail"),
    path('diagnosis-create/',
         views.diagnosisCreate, name="diagnosis-create"),
    path('diagnosis-delete/<str:pk>/',
         views.diagnosisDelete, name="diagnosis-delete"),
]
