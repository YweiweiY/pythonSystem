from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('caseCategory', CaseCategoryViewSet, basename="CaseCategoryViewSet")

urlpatterns = [
    path("", include(router.urls)),
    path("lawCase/", LawCaseView.as_view(), name="lawCase"),
    path("lawCase/<int:id>/", LawCaseView.as_view(), name="lawCaseDetail"),
]
