import { useEffect, useState } from "react";
import { BlogForm, Container } from "../components";
import { useParams } from "react-router-dom";
import service from "../appwrite/config";

export default function EditBlog() {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((blog) => {
        if (blog) {
          setBlog(blog);
        }
      })
    }
  }, [slug]);

  return blog ? (
    <Container>
      <BlogForm post={blog} />
    </Container>
  ) : null;
}
