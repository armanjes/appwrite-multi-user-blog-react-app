import { useEffect, useState } from "react";
import { Container, BlogCard } from "../components";
import service from "../appwrite/config";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) setBlogs(posts.documents);
    });
  }, []);
  

  return (
    <Container>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-4 my-8">
        {blogs.map((data) => (
          <BlogCard key={data.$id} {...data} />
        ))}
      </div>
    </Container>
  );
}
