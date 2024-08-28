import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../Api/userApi";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
<form 
  className="flex flex-col gap-5 m-auto mt-10 mb-10 w-[40%] border-2 border-green-500 p-5 rounded-lg" 
  onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 m-auto">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-green-500">{errors.password.message}</span>
        )}
      </label>
      <span className="flex items-center justify-between mx-10 my-10">
        <span className="text-sm">
          Not Registered?{" "}
          <Link className="underline text-green-500 hover:text-yellow-500" to="/register">
            Create an account here
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold text-xl rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-green-500 font-mono"
>
          Login
        </button>
      </span>
</form>

  );
};

export default SignIn;