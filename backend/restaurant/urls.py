from django.urls import path
from . import views

urlpatterns = [
    path('api/catering/submit/', views.submit_catering, name='catering-submit'),
    path('api/contact/submit/', views.submit_contact, name='contact-submit'),
]