from django.urls import path, include
from rest_framework import DefaultRouter
from .views import FlashViewSet, QueryLogViewSet


router = DefaultRouter()
router.Register(r'flash', FlashViewSet)
router.Register(r'querylog', QueryLogViewSet)


urlpatterns = [
    path('',include(router.urls)),
]