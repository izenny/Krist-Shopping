import React from 'react'
import OtpModel from "../assets/OtpModel.png";
import Logo from "../assets/Logo.png";
import { FaLessThan } from "react-icons/fa6";
const Otp = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <div className="relative w-full md:w-1/2 h-full ">
        <img
          src={OtpModel}
          alt=""
          className="md:w-[85%] w-full h-full  "
        />
        <div className="absolute left-5 top-5 w-28">
          {" "}
          <img src={Logo} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 h-full flex  items-center">
        <div className="w-full md:w-3/4 p-10">
        <h2 className="my-2 flex items-center text-center gap-2"> <FaLessThan className="size-4"/>Back</h2>
          <h2 className="text-4xl font-medium mb-2">Enter OTP</h2>
          <p className="text-sm text-gray-500 mb-2">We have share a code to your registered email address <span>email@gmail.com</span></p>
          <div className="w-full flex flex-col gap-2 my-5">
            <div className="w-full flex  gap-2">
              <input
                type="text"
                className="border-2 w-14 border-black rounded-lg p-2"
              />
              <input
                type="text"
                className="border-2 w-14 border-black rounded-lg p-2"
              />
              <input
                type="text"
                className="border-2 w-14 border-black rounded-lg p-2"
              />
              <input
                type="text"
                className="border-2 w-14 border-black rounded-lg p-2"
              />
              <input
                type="text"
                className="border-2 w-14 border-black rounded-lg p-2"
              />
            </div>
          </div>
          <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
            Verify
          </button>
        </div>
      </div>
    </div>
  )
}

export default Otp