from django.urls import path
from . import views
from about_company.views import *

urlpatterns = [
    path('history/', views.HistoryView.as_view(), name='history'),
    path('mainhistory/', getHistory),
    path('gallery/', views.GalleryView.as_view(), name='gallery'),
    path('certificate/', views.CertificateView.as_view(), name='certificate'),
    path('ceo/' , views.CEOView.as_view(), name='ceo'),
]