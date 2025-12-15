import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const createAccount = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) dispatch(login(userData));
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full sm:w-[50%] md:w-[80%] lg:w-[40%] mx-auto  my-16 p-8 rounded-xl border border-gray-200 shadow-md bg-white">
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign up to create account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Already have an account?&nbsp;
        <Link
          to="/sign-in"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

      <form onSubmit={handleSubmit(createAccount)} className="mt-8">
        <Input
          label="Name:"
          placeholder="Enter name"
          {...register("name", {
            required: "Name is required.",
          })}
        />
        {errors.name && (
          <p className="text-red-500">{errors.name.message}</p>
        )}
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
          {...register("password", { required: "Password is required." })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Button type="submit" className="mt-4 w-full px-4 py-2 rounded-full text-blue-600 bg-blue-200">
          Signup
        </Button>
      </form>
    </div>
  );
}
