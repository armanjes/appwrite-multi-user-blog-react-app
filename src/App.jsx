import { Outlet } from "react-router-dom";
import { Header, Footer, Loader } from "./components";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) =>
        userData ? dispatch(login({ userData })) : dispatch(logout())
      )
      .finally(() => setLoading(false));
    
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  ) : (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
