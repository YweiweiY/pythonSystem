from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class LawCaseSerializers(serializers.ModelSerializer):
    class Meta:
        model = LawCase
        fields = "__all__"
        depth = 1


# User = get_user_model()

class CaseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseCategory
        fields = "__all__"
