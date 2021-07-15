from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.ProductView.as_view(), name='product'),
]