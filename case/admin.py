from django.contrib import admin
from .models import *


class LawCaseAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "case_category", "description", "date", "location","image")


admin.site.register(LawCase, LawCaseAdmin)


class CaseCategoryAdmin(admin.ModelAdmin):
    list_display = ("id", 'title', 'date')


admin.site.register(CaseCategory, CaseCategoryAdmin)
