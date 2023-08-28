from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class CaseCategory(models.Model):
    title = models.CharField(max_length=199)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class LawCase(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    case_category = models.ForeignKey(
        CaseCategory, on_delete=models.SET_NULL, blank=True, null=True)
    # image = models.ImageField(upload_to="products/")
    # market_price = models.PositiveIntegerField()
    # selling_price = models.PositiveIntegerField()
    description = models.TextField()
    location = models.CharField(max_length=20)    

    def __str__(self):
        return self.title

