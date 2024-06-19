from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FlashViewSet, QueryLogViewSet


router = DefaultRouter()
router.register(r'flashes', FlashViewSet)
router.register(r'query-logs', QueryLogViewSet)


urlpatterns = [
    path('',include(router.urls)),
]