from rest_framework import serializers
from .models import *

class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Header
        fields = '__all__'

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = '__all__'
    
class AboutCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutCompany
        fields = '__all__'



class ClueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clue
        fields = '__all__'