import React from "react";
import ForgotModel from "../assets/ForgotModel.png";
import Logo from "../assets/Logo.png";
import { FaLessThan } from "react-icons/fa6";
import NewPassword from "./NewPassword";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate =useNavigate()
  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <div className="relative w-full md:w-1/2 h-full ">
        <img
          src={ForgotModel}
          alt=""
          className="w-full md:w-[85%] h-full object-fill "
        />
        <div onClick={()=>navigate('/')} className="absolute left-5 top-5 w-28 cursor-pointer">
          {" "}
          <img src={Logo} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 h-full flex  items-center">
        {/* <div className="w-full sm:w-3/4 md:w-3/4 p-10">
        <h2 className="my-2 flex items-center text-center gap-2"> <FaLessThan className="size-4"/>Back</h2>
          <h2 className="text-4xl font-medium mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-500 mb-2">Enter your registered email address, we'll send you a code to reset your password</p>
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
          </div>
          <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
            Send OTP
          </button>
        </div> */}
        <NewPassword/>
      </div>
    </div>
  );
};

export default ForgotPassword;
