import { useSelector } from "react-redux";
import { BlogCard, Container } from "../components";
import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Query } from "appwrite";

export default function MyPosts() {
  const userData = useSelector((state) => state.auth.userData);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!userData) return;

    service.getPosts([Query.equal("userId", userData.$id)]).then((posts) => {
      if (posts) setBlogs(posts.documents);
    });
  }, [userData]);

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-2xl font-bold mb-6">My Posts</h1>

        {blogs.length === 0 && (
          <p className="text-gray-500">You haven’t written any posts yet.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.$id} {...blog} isAuthor={true} />
          ))}
        </div>
      </div>
    </Container>
  );
}
