import requests


def extract_repo_info(repo_url):
    parts = repo_url.rstrip("/").split("/")
    owner = parts[-2]
    repo = parts[-1]
    return owner, repo


def get_repo_files(repo_url):

    owner, repo = extract_repo_info(repo_url)

    url = f"https://api.github.com/repos/{owner}/{repo}/git/trees/HEAD?recursive=1"

    response = requests.get(url)

    data = response.json()

    files = []

    for item in data.get("tree", []):
        if item["type"] == "blob":

            path = item["path"]

            if path.endswith((".py", ".js", ".ts", ".java")):
                files.append(path)

    return files

def get_file_content(owner, repo, file_path):

    url = f"https://raw.githubusercontent.com/{owner}/{repo}/HEAD/{file_path}"

    response = requests.get(url)

    if response.status_code == 200:
        return response.text

    return None