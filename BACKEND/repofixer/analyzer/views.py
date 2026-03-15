from rest_framework.decorators import api_view
from rest_framework.response import Response

from .services.embedding_service import create_embedding
from .services.github_service import (extract_repo_info, get_file_content,
                                      get_repo_files)
from .services.vector_service import store_embedding


@api_view(["POST"])
def analyze_repo(request):

    repo_url = request.data.get("repo_url")

    owner, repo = extract_repo_info(repo_url)

    files = get_repo_files(repo_url)

    file_contents = []

    for file in files[:5]:

        content = get_file_content(owner, repo, file)

        if content:

            embedding = create_embedding(content)

            store_embedding(file, embedding, content)

            file_contents.append({
                "file": file,
                "preview": content[:200]
            })

    return Response({
        "total_files": len(files),
        "sample_files": file_contents
    })