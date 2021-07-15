from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class HeaderView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Header.objects.all();
        serializer = HeaderSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        header_serializer = HeaderSerializer(data=request.data)
        if header_serializer.is_valid():
            header_serializer.save()
            return Response(header_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', header_serializer.errors)
            return Response(header_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MainView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Main.objects.all();
        serializer = MainSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        main_serializer = MainSerializer(data=request.data)
        if main_serializer.is_valid():
            main_serializer.save()
            return Response(main_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', main_serializer.errors)
            return Response(main_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AboutCompanyView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = AboutCompany.objects.all();
        serializer = AboutCompanySerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        company_serializer = AboutCompanySerializer(data=request.data)
        if company_serializer.is_valid():
            company_serializer.save()
            return Response(company_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', company_serializer.errors)
            return Response(company_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClueView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        posts = Clue.objects.all();
        serializer = ClueSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ClueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)