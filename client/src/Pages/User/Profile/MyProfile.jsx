
import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import image from "../../../assets/Post5.jpg";
import { FaBell, FaBoxOpen, FaCreditCard, FaHeart, FaUser } from "react-icons/fa6";
import { IoCog } from "react-icons/io5";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import Profile from "./Profile";
import MyOrders from "../Order/MyOrders";
import MyWhishlist from "../WhishList/MyWhishlist";
import ManageAddress from "../Address/ManageAddress";
import PaymentCards from "../Payments/PaymentCards";
import Notifications from "../Notifications/Notifications";
import Settings from "../Settings/Settings";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");
  const menuItems = [
    { name: "Personal Information", icon: <FaUser />, path: "profile" },
    { name: "My Orders", icon: <FaBoxOpen />, path: "orders" },
    { name: "My Wishlists", icon: <FaHeart />, path: "wishlists" },
    { name: "Manage Addresses", icon: <LiaMapMarkerAltSolid />, path: "addresses" },
    { name: "Saved Cards", icon: <FaCreditCard />, path: "cards" },
    { name: "Notifications", icon: <FaBell />, path: "notifications" },
    { name: "Settings", icon: <IoCog />, path: "settings" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="border w-1/4 rounded-lg">
          <div className="flex gap-5 p-5 border-b items-center">
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
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`cursor-pointer flex gap-4 items-center text-lg font-medium py-4 px-5 ${
                  activeSection === item.name
                    ? "bg-black text-white"
                    : "hover:bg-gray-300 hover:text-black"
                }`}
                // className=" cursor-pointer flex gap-4 items-center text-lg font-medium py-4 px-5 hover:bg-gray-300 hover:text-black"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-3/4 p-5">
          <Routes>
            <Route index element={<Profile />} /> {/* Default Content */}
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="wishlists" element={<MyWhishlist />} />
            <Route path="addresses" element={<ManageAddress />} />
            <Route path="cards" element={<PaymentCards />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

