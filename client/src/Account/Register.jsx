import React from "react";
import RegisterModel from "../assets/RegisterModel.png";
import Logo from "../assets/Logo.png";
const Register = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row ">
      <div className="relative w-full  md:w-1/2 h-full ">
        <img
          src={RegisterModel}
          alt=""
          className="w-full md:w-[85%] h-full "
        />
        <div className="absolute left-5 top-5 w-28">
          {" "}
          <img src={Logo} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 h-full flex  items-center">
        <div className="w-full sm:w-3/4 md:w-3/4 p-10">
          <h2 className="text-4xl font-medium mb-2">Create New Account</h2>
          <p className="text-sm text-gray-500 mb-2">Please enter details</p>
          <div className="w-full flex flex-col gap-2  my-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="" className="">
                First Name
              </label>
              <input
                type="text"
                className="border-2 border-black rounded-lg w-full p-2"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="">Last Name</label>
              <input
                type="password"
                className="border-2 border-black rounded-lg w-full p-2"
              />
            </div>
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
          <p className="text-sm flex items-center gap-2  py-3  ">
            <input type="checkbox" id="checkbox" className="size-4 " />{" "}
            <span>
              I agree to the <span>Terms & Conditions</span>
            </span>
          </p>
          <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
