import { useDispatch } from "react-redux";
import { Button } from "../index";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <li className="text-md ">
      <Button
        onClick={handleLogout}
        className="px-4 py-2 rounded-full bg-red-200 text-red-600 px-4 py-2"
      >
        Logout
      </Button>
    </li>
  );
}
