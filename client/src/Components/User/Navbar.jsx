import React from "react";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="container mx-auto flex justify-around items-center py-4 px-6">
        {/* Logo or Title */}
        <div className="w-20">
          <img src={Logo} alt="" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex ">
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:scale-105 font-serif"> Home</li>
            <li className="cursor-pointer hover:scale-105 font-serif">Shop</li>
            <li className="cursor-pointer hover:scale-105 font-serif">
              Our Story
            </li>
            <li className="cursor-pointer hover:scale-105 font-serif"> Blog</li>
            <li className="cursor-pointer hover:scale-105 font-serif">
              Contact Us
            </li>
          </ul>
        </div>
        {/* icons  */}
        <div className="flex justify-center items-center space-x-4">
          <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
            <CiSearch />
          </div>
          <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
            <CiHeart />
          </div>
          <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
            <LiaShoppingBagSolid />
          </div>
          <button className=" bg-black p-2 w-20 rounded-lg hover:scale-105 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
