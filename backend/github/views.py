import requests
from django.conf import settings
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import redirect


def github_login(request):
    github_auth_url = (
        "https://github.com/login/oauth/authorize"
        f"?client_id={settings.GITHUB_CLIENT_ID}"
        "&scope=repo"
    )
    return redirect(github_auth_url)


def github_callback(request):
    code = request.GET.get("code")
    if not code:
        return JsonResponse({"error": "No code"}, status=400)

    token_res = requests.post(
        "https://github.com/login/oauth/access_token",
        headers={"Accept": "application/json"},
        data={
            "client_id": settings.GITHUB_CLIENT_ID,
            "client_secret": settings.GITHUB_CLIENT_SECRET,
            "code": code,
        },
    ).json()

    access_token = token_res.get("access_token")
    if not access_token:
        return JsonResponse(token_res, status=400)

    user_data = requests.get(
        "https://api.github.com/user",
        headers={"Authorization": f"token {access_token}"},
    ).json()

    username = user_data.get("login")
    if not username:
        return JsonResponse(user_data, status=400)

    user, _ = User.objects.get_or_create(username=username)
    login(request, user)

    request.session["github_token"] = access_token

    return redirect("http://localhost:3000/")

import requests
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse


@login_required
def list_repos(request):
    token = request.session.get("github_token")

    if not token:
        return JsonResponse({"error": "No GitHub token"}, status=401)

    res = requests.get(
        "https://api.github.com/user/repos",
        headers={"Authorization": f"token {token}"},
    )

    return JsonResponse(res.json(), safe=False)
