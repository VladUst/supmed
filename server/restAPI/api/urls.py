from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('ml-predict/', views.mlPredict, name="ml-predict"),
    path('onto-predict/', views.ontoPredict, name="onto-predict"),
    path('predict-diseases/', views.predictDiseases, name="predict-diseases"),
    path('process-text/', views.processText, name="process-text"),
    path('gpt-recommendations/', views.GPTRecommendations, name="gpt-recommendations"),
    path('chapters-list/',
         views.chaptersList, name="chapters-list"),
    path('blocks-list/<str:chapter_name>/',
         views.blocksList, name="blocks-list"),
    path('diagnoses-list/<str:block_name>/', views.diagnosesList, name="diagnoses-list"),
    path('diagnosis-detail/<str:pk>/',
         views.diagnosisDetail, name="diagnosis-detail"),
    path('diagnosis-create/',
         views.diagnosisCreate, name="diagnosis-create"),
    path('diagnosis-delete/<str:pk>/',
         views.diagnosisDelete, name="diagnosis-delete"),
]
