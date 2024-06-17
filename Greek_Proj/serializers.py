from rest_framework import serializers
from .models import Flash, QueryLog

class FlashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flash
        fields = '__all__'

class QueryLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueryLog
        fields = '__all__'