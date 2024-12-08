import React from "react";
import Tick from "../../assets/Tick.png";
const Successfull = () => {
  return (
    <div className="h-screen bg-slate-100 w-full flex justify-center items-center">
      <div className=" bg-white w-1/3 h-1/2 gap-4 flex flex-col justify-center items-center">
        <div className="">
          <img src={Tick} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-medium">Password Changed Successfully</h2>
          <p className="text-sm">Your password has been updated successfully</p>
        </div>
        <div className="w-1/2">
          <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successfull;
