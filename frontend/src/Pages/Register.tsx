import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../Api/userApi";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg"; // Ensure this image is correct or replace with your desired image

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
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
        src={login} // Ensure the image path is correct
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
      <form 
        className="relative z-10 p-6 md:p-12 bg-opacity-40 backdrop-blur-md border border-green-200 rounded-lg shadow-lg w-full max-w-xl flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 mb-6 text-center">Create an Account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input
              className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Last Name
            <input
              className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </label>
        </div>
        <label className="text-gray-700 text-sm font-bold flex-1">
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
        <label className="text-gray-700 text-sm font-bold flex-1">
          Password
          <input
            type="password"
            className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
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
        <label className="text-gray-700 text-sm font-bold flex-1">
          Confirm Password
          <input
            type="password"
            className="border border-gray-300 bg-gray-100 rounded w-full py-2 px-3 font-normal text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword.message}</span>
          )}
        </label>
        <span>
          <button
            type="submit"
            className="bg-green-600 text-white p-2 font-bold text-xl rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-green-500 transition-all"
          >
            Create Account
          </button>
        </span>
      </form>
    </div>
  );
};

export default Register;
