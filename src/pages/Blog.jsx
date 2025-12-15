import { useParams } from "react-router-dom";
import { Container } from "../components";
import { useEffect, useState } from "react";
import service from "../appwrite/config";
import parse from "html-react-parser";

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setBlog(post);
        }
      });
    }
  }, []);

  return blog ? (
    <div className="my-10">
      <Container>
        <div className="max-w-[20vw] mx-auto">
          <img
            src={service.getFilePreview(blog.featuredImage)}
            alt={blog.title}
            className="rounded-lg mb-4 max-h-[50vh] w-full object-cover"
          />
        </div>

        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
        </div>
        <div className="browser-css">{parse(blog.content)}</div>
      </Container>
    </div>
  ) : null;
}
