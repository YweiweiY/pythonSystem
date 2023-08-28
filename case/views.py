import json

from django.http import JsonResponse
from rest_framework import views, viewsets, generics, mixins
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class LawCaseView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = LawCase.objects.all().order_by("-id")
    serializer_class = LawCaseSerializers
    lookup_field = "id"

    def get(self, request, id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)


class CaseCategoryViewSet(viewsets.ViewSet):
    def list(self, request):
        query = CaseCategory.objects.all()
        serializer = CaseCategorySerializer(query, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        query = CaseCategory.objects.get(id=pk)
        serializer = CaseCategorySerializer(query)
        data_data = serializer.data
        all_data = []
        category_case = LawCase.objects.filter(category_id=data_data['id'])
        category_case_serializer = LawCaseSerializers(category_case, many=True)
        data_data['category_case'] = category_case_serializer.data
        all_data.append(data_data)
        return Response(all_data)

