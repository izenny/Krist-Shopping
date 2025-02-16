import React, { useState } from "react";
import RegisterModel from "../assets/RegisterModel.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/AuthSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const { isLoading } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const RegisterUser = async () => {
    try {
      await dispatch(registerUser(formData)).unwrap();
      navigate("/otp"); // Redirect user after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({ apiError: "Something went wrong. Please try again." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) {
      validationErrors.agree = "You must agree to the Terms & Conditions";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", formData);
      RegisterUser();
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-full">
        <img
          src={RegisterModel}
          alt="Register"
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
        <div className="w-full sm:w-3/4 md:w-3/4 p-10">
          <h2 className="text-4xl font-medium mb-2">Create New Account</h2>
          <p className="text-sm text-gray-500 mb-2">Please enter details</p>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2 my-2">
              <div className="w-full flex flex-col gap-2">
                <label>Name</label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="border-2 border-black rounded-lg w-full p-2"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-2">
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 border-black rounded-lg w-full p-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-2">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-2 border-black rounded-lg w-full p-2"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-2">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border-2 border-black rounded-lg w-full p-2"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 py-3">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="size-4"
              />
              <label htmlFor="agree">
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree}</p>
            )}

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
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
