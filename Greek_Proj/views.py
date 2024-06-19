from django.shortcuts import render
from rest_framework import viewsets
from .models import Flash, QueryLog
from .serializers import FlashSerializer, QueryLogSerializer
from datetime import datetime
import time

class FlashViewSet(viewsets.ModelViewSet):
    queryset = Flash.objects.all()
    serializer_class = FlashSerializer

    def list(self, request, *args, **kwargs):
        start_time = datetime.now()
        start = time.time()

        response = super().list(request, *args, **kwargs)

        end_time = datetime.now()
        end = time.time()

        QueryLog.objects.create(
            query=str(request.query_params),
            operation_name='list',
            start_time=start_time,
            end_time=end_time,
            execution_time=end - start
        )

        return response

class QueryLogViewSet(viewsets.ModelViewSet):
    queryset = QueryLog.objects.all()
    serializer_class = QueryLogSerializer
