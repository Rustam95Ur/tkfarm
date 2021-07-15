from django.urls import path
from . import views

urlpatterns = [
    path('header/', views.HeaderView.as_view(), name='header'),
    path('main/', views.MainView.as_view(), name='main'),
    path('aboutcompany/', views.AboutCompanyView.as_view(), name='about_company'),
    path('clue/', views.ClueView.as_view(), name='clue')
]