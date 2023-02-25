from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('diagnoses-list/', views.diagnosesList, name="diagnoses-list"),
    path('diagnosis-detail/<str:pk>/',
         views.diagnosisDetail, name="diagnosis-detail"),
    path('diagnosis-create/',
         views.diagnosisCreate, name="diagnosis-create"),
    path('diagnosis-delete/<str:pk>/',
         views.diagnosisDelete, name="diagnosis-delete"),
]
