from django.urls import path
from . import views

urlpatterns = [
    path('api/catering/submit/', views.submit_catering, name='catering-submit'),
]