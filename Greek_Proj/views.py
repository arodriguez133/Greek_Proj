from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Flash, QueryLog
from .serializers import FlashSerializer, QueryLogSerializer

class FlashViewSet(viewsets.ModelViewSet):
    queryset = Flash.objects.all()
    serializer_class = FlashSerializer

class QueryLogViewSet(viewsets.ModelViewSet):  
    queryset = QueryLog.objects.all()
    serializer_class = QueryLogSerializer
    