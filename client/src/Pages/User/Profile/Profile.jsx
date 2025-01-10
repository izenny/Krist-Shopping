import React from "react";
import image from "../../../assets/Post5.jpg";
import { TbEdit } from "react-icons/tb";
const Profile = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-5 p-5  items-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg">Welcome 👋</p>
            <h2 className="font-semibold text-lg">[User Name]</h2>
          </div>
        </div>
        <div>
          <button className="bg-black text-white py-3 px-5 rounded-lg flex  items-center gap-3">
            <TbEdit />
            Edit Profile
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="space-y-2">
          <label htmlFor="" className="font-medium ">
            First Name
          </label>
          <div className="border py-3 px-2 rounded-lg border-black">Name </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-medium ">
            Last Name
          </label>
          <div className="border py-3 rounded-lg border-black px-2">
            Name 2{" "}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-medium ">
            Phone Number
          </label>
          <div className="border py-3 rounded-lg border-black px-2">
            7866546433513{" "}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-medium ">
            Email Address
          </label>
          <div className="border py-3 rounded-lg border-black px-2">
            Name@gmail{" "}
          </div>
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <label htmlFor="" className="font-medium ">
          Address
        </label>
        <div className="border py-3 rounded-lg border-black px-2">Name </div>
      </div>
    </div>
  );
};

export default Profile;
