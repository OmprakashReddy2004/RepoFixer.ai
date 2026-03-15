from django.urls import path

from .views import analyze_repo

urlpatterns = [
    path("analyze-repo/", analyze_repo),
]