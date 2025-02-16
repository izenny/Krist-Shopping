import React, { useState } from "react";
import LoginModel from "../assets/LoginModel.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/AuthSlice";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!email || !password) {
      setError("All fields are required.");

      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    return true;
  };

  const LoginUser = async () => {
    if (!validateForm()) return;

    try {
      const formData = { email, password };
      const response = await dispatch(loginUser(formData)).unwrap(); // Unwrap to handle success/failure
      // navigate("/"); // Redirect to home page
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-full">
        <img
          src={LoginModel}
          alt="Login Model"
          className="w-full md:w-[85%] h-full"
        />
        <div
          onClick={() => navigate("/")}
          className="absolute left-5 top-5 w-28 cursor-pointer"
        >
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 h-full flex items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            LoginUser();
          }}
          className="w-full sm:w-3/4 md:w-3/4 p-10"
        >
          <h2 className="text-4xl font-medium mb-2">
            Welcome <span className="text-3xl">👋</span>
          </h2>
          <p className="text-sm text-gray-500 mb-2">Please login here</p>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="w-full flex flex-col gap-2 my-2">
            <div className="w-full flex flex-col gap-2">
              <label>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-black rounded-lg w-full p-2"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label>Password</label>
              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-black rounded-lg w-full p-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showpassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-sm focus:outline-none"
                >
                  {showpassword ? <LuEye /> : <LuEyeClosed />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p
              onClick={() => navigate("/signup")}
              className="text-xs text-start py-3 hover:text-blue-400 cursor-pointer"
            >
              Register
            </p>
            <p
              onClick={() => navigate("/forgot-password")}
              className="text-xs text-end py-3 hover:text-blue-400 cursor-pointer"
            >
              Forgot Password?
            </p>
          </div>

          <button
            disabled={isLoading}
            type="submit" // Important: This allows Enter to submit the form
            className={`w-full bg-black p-3 rounded-lg flex justify-center items-center text-white transition-transform duration-200 ${
              isLoading
                ? "cursor-not-allowed opacity-50"
                : "hover:scale-105 cursor-pointer"
            }`}
          >
            {isLoading ? (
              <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
