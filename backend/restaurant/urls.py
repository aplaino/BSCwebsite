from django.urls import path
from . import views

urlpatterns = [
    path('api/catering/submit/', views.submit_catering, name='catering-submit'),
    path('api/contact/submit/', views.submit_contact, name='contact-submit'),
    path('api/restaurant/foodtruckmenu/', views.get_food_truck_menu, name='food-truck-menu'),
    path('api/news/event/', views.get_event_news, name='event-news'),
    path('api/reviews/hero/', views.get_hero_review, name='hero-review'),
    path('api/restaurant/menu/', views.get_restaurant_menu, name='restaurant-menu'),
]
