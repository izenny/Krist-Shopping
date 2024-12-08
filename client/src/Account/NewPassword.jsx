import React from "react";

const NewPassword = () => {
  return (
    <div className="w-3/4 p-10">
      <h2 className="text-4xl font-medium mb-2">
        New Password
      </h2>
      <p className="text-sm text-gray-500 mb-2">Enter your new Password here</p>
      <div className="w-full flex flex-col gap-2  my-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="">
            New Password
          </label>
          <input
            type="password"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Confirm New Password</label>
          <input
            type="password"
            className="border-2 border-black rounded-lg w-full p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
