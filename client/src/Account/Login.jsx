import React from "react";
import LoginModel from "../assets/LoginModel.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <div className="relative w-full md:w-1/2 h-full ">
        <img src={LoginModel} alt="" className="w-full md:w-[85%] h-full " />
        <div
          onClick={() => navigate("/")}
          className="absolute left-5 top-5 w-28 cursor-pointer"
        >
          {" "}
          <img src={Logo} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 h-full flex  items-center">
        <div className="w-full sm:w-3/4 md:w-3/4 p-10">
          <h2 className="text-4xl font-medium mb-2">
            Welcome <span className="text-3xl">👋</span>
          </h2>
          <p className="text-sm text-gray-500 mb-2">Please login here</p>
          <div className="w-full flex flex-col gap-2  my-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="" className="">
                Email Address
              </label>
              <input
                type="text"
                className="border-2 border-black rounded-lg w-full p-2"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="border-2 border-black rounded-lg w-full p-2"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p
              onClick={() => navigate("/signup")}
              className="text-xs text-start py-3 hover:text-blue-400 cursor-pointer "
            >
              Register
            </p>
            <p
              onClick={() => navigate("/forgot-password")}
              className="text-xs text-end py-3 hover:text-blue-400 cursor-pointer "
            >
              Forgot Password?
            </p>
          </div>
          <button className="w-full bg-black p-3 rounded-lg hover:scale-105 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
