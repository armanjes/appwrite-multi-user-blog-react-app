import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "../components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "./../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full sm:w-[50%] md:w-[75%] lg:w-[40%] mx-auto my-16 p-8 rounded-xl border border-gray-200 shadow-md bg-white">
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/sign-up"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      {/* form start */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)} className="mt-8">
        <Input
          label="Email:"
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required.",
            validate: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          label="Password:"
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required.",
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Button
          type="submit"
          className="mt-4 w-full px-4 py-2 rounded-full text-blue-600 bg-blue-200"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
