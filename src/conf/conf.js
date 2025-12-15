const {
    VITE_APPWRITE_URL,
    VITE_APPWRITE_PROJECT_ID,
    VITE_APPWRITE_DATABASE_ID,
    VITE_APPWRITE_COLLECTION_ID,
    VITE_APPWRITE_BUCKET_ID
} = import.meta.env

const conf = {
    url: String(VITE_APPWRITE_URL),
    projectId: String(VITE_APPWRITE_PROJECT_ID),
    databaseId: String(VITE_APPWRITE_DATABASE_ID),
    collectionId: String(VITE_APPWRITE_COLLECTION_ID),
    bucketId: String(VITE_APPWRITE_BUCKET_ID)
}

export default conf