import chromadb

client = chromadb.Client()

collection = client.get_or_create_collection("repo_files")


def store_embedding(file_path, embedding, content):

    collection.add(
        documents=[content],
        embeddings=[embedding],
        ids=[file_path]
    )