// import React from "react";
// import { CiHeart } from "react-icons/ci";
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import { CiSearch } from "react-icons/ci";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import Logo from "../../../assets/Logo.png";
// const Navbar = () => {
//   return (
//     <div className="w-full bg-white text-black">
//       <div className="container mx-auto flex  justify-between md:justify-around items-center py-4 px-6">
//         {/* Logo or Title */}
//         <div className="w-20">
//           <img src={Logo} alt="" />
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex ">
//           <ul className="flex space-x-8">
//             <li className="cursor-pointer hover:scale-105 font-serif"> Home</li>
//             <li className="cursor-pointer hover:scale-105 font-serif">Shop</li>
//             <li className="cursor-pointer hover:scale-105 font-serif">
//               Our Story
//             </li>
//             <li className="cursor-pointer hover:scale-105 font-serif"> Blog</li>
//             <li className="cursor-pointer hover:scale-105 font-serif">
//               Contact Us
//             </li>
//           </ul>
//         </div>
//         {/* icons  */}
//         <div className="hidden md:flex justify-center items-center space-x-4">
//           <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
//             <CiSearch />
//           </div>
//           <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
//             <CiHeart />
//           </div>
//           <div className="p-2 border rounded-lg text-xl hover:scale-105 cursor-pointer">
//             <LiaShoppingBagSolid />
//           </div>
//           <button className=" bg-black p-2 w-20 rounded-lg hover:scale-105 text-white">
//             Login
//           </button>
//         </div>
//         {/* mobile  */}
//         <div className="md:hidden block">
//           <div className="">
//           <IoReorderThreeOutline className="size-10" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo.png";
import CategoryBox from "./CategoryBox";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [showCategory,setShowCategory] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className="w-full bg-white text-black shadow">
      <div className="container mx-auto flex justify-between md:justify-around items-center py-4 px-6">
        {/* Logo */}
        <div className="w-20">
          <img src={Logo} alt="Brand Logo" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Home
            </li>
            <li onClick={toggleShowCategory} className=" relative cursor-pointer hover:scale-105 transition-transform font-serif">
              Shop
              
            </li>
            {showCategory && (<div className="absolute bg-slate-100 rounded-lg shadow-lg  top-20 left-10 md:w-3/4">
                <CategoryBox/>
              </div>)}
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Our Story
            </li>
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Blog
            </li>
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Icons and Login (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="p-2 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
            aria-label="Search"
          >
            <CiSearch />
          </div>
          <div
            className="p-2 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
            aria-label="Favorites"
          >
            <CiHeart />
          </div>
          <div
            className="p-2 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
            aria-label="Shopping Bag"
          >
            <LiaShoppingBagSolid />
          </div>
          <button className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white">
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="text-2xl"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-lg   md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li onClick={toggleShowCategory} className="cursor-pointer hover:text-gray-500">Shop 
            {showCategory && (<div className="top-20 left-10 md:w-3/4">
                <CategoryBox/>
              </div>)}
            </li>
            
            <li className="cursor-pointer hover:text-gray-500">Our Story</li>
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
            <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
            <div className="flex flex-col space-y-2 mt-4">
              <div
                className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
                aria-label="Search"
              >
                <CiSearch />
                
              </div>
              <div
                className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
                aria-label="Favorites"
              >
                <CiHeart />
              </div>
              <div
                className="p-2 w-10 border rounded-lg text-xl cursor-pointer"
                aria-label="Shopping Bag"
              >
                <LiaShoppingBagSolid />
              </div>
            </div>
            <button className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white">
            Login
          </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
