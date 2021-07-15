from django.urls import path
from new.views import *

urlpatterns = [
    path('block/', BlockView.as_view()),
    path('block/<int:i>/', getNews),
]