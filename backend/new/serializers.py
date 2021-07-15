from rest_framework import serializers
from .models import *

class BlockSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(format="%d.%m.%Y - %H:%M")
    class Meta:
        model = Block
        fields = '__all__'