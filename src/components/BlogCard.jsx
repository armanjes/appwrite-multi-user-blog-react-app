import { Link, useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import Button from "./Button";

export default function BlogCard({ $id, title, featuredImage, isAuthor }) {
  const navigate = useNavigate();

  const deletePost = () => {
    service.deletePost($id).then((status) => {
      if (status) {
        service.deleteFile(featuredImage);
        navigate("/");
      }
    });
  };

  return (
    <div className="p-1 sm:p-4 bg-white rounded-lg shadow max-w-80 relative">
      {isAuthor && (
        <div className="absolute right-6 top-6">
          <Link to={`/edit-blog/${$id}`}>
            <Button className="bg-green-500 mr-3 p-0.5 rounded">Edit</Button>
          </Link>
          <Button className="bg-red-500 p-0.5 rounded" onClick={deletePost}>
            Delete
          </Button>
        </div>
      )}
      <Link to={`/blog/${$id}`}>
        <div>
          <img
            className="rounded-md max-h-40 w-full object-cover"
            src={service.getFilePreview(featuredImage)}
            alt="officeImage"
          />
          <p className="text-gray-900 text-lg sm:text-xl font-semibold ml-2 mt-2">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}
