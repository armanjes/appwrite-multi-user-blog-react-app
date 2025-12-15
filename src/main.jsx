import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Protected } from "./components/index.js";
// pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AddPost from "./pages/AddPost";
import AllBlogs from "./pages/AllBlogs.jsx";
import Blog from "./pages/Blog.jsx";
import MyPosts from "./pages/MyPosts";
import EditBlog from "./pages/EditBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/sign-in",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/add-blog",
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        ),
      },
      {
        path: "/my-blogs",
        element: (
          <Protected authentication>
            <MyPosts />
          </Protected>
        ),
      },
      {
        path: "/blog/:slug",
        element: <Blog />,
      },
      {
        path: "/edit-blog/:slug",
        element: (
          <Protected authentication>
            <EditBlog/>
          </Protected>
        )
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
