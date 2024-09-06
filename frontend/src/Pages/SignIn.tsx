import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../Api/userApi";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={login}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
      <div className="relative z-10 p-6 md:p-12 bg-opacity-40 backdrop-blur-md border border-orange-200 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 mb-6 text-center">Sign In</h2>
        <form 
          className="flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <label className="text-gray-700 text-sm font-bold">
            Email
            <input
              type="email"
              className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold">
            Password
            <input
              type="password"
              className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm">
              Not Registered?{" "}
              <Link className="underline text-green-500 hover:text-yellow-500" to="/register">
                Create an account here
              </Link>
            </span>
            <button
              type="submit"
              className="bg-green-600 text-white p-2 font-bold text-xl rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-green-500 transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
