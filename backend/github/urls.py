from django.urls import path

from .views import github_callback, github_login, list_repos

urlpatterns = [
    path("login/", github_login),
    path("callback/", github_callback),
    path("repos/", list_repos),
]
