// import React from "react";
// import Logo from "../../../assets/Logo2.png";
// import { IoCallOutline } from "react-icons/io5";
// import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { LuCopyright, LuFacebook, LuInstagram, LuX } from "react-icons/lu";
// import { RiTwitterXFill } from "react-icons/ri";
// const Footer = () => {
//   return (
//     <div className="w-full bg-black text-white p-5">
//       <div className="grid md:grid-cols-4 justify-around p-5">
//         <div className="space-y-5">
//           <div className="w-20">
//             <img src={Logo} alt="Brand Logo" />
//           </div>
//           <ul className="pl-5 space-y-3">
//             <li className="flex items-center gap-2 "><IoCallOutline/>(704) 55 55 555 55</li>
//             <li className="flex items-center gap-2 "><MdOutlineMail/> kristshop@example.com</li>
//             <li className="flex items-center gap-2 "><MdOutlineLocationOn/> location 325455</li>
//           </ul>
//         </div>
//         <div className="space-y-3">
//             <h2 className="font-semibold">Information</h2>
//             <ul className="space-y-3 pl-5">

//                 <li>My account</li>
//                 <li>Login</li>
//                 <li>My Cart</li>
//                 <li>My Wishlist</li>
//                 <li>Checkout</li>
//             </ul>
//         </div>
//         <div className="space-y-3">
//             <h2 className="font-semibold">Service</h2>
//             <ul className="space-y-3 pl-5">

//                 <li>About Us</li>
//                 <li>Careers</li>
//                 <li>Delivery Information</li>
//                 <li>Privacy Policy</li>
//                 <li>Terms & Conditions</li>
//             </ul>
//         </div>
//         <div className="space-y-3">
//             <h2 className="font-semibold">Subscribe</h2>
//             <ul className="space-y-5 pl-5">

//                 <p>Enter your email below to be the first to know about new collections and launches</p>
//                 <div className="flex items-center text-3xl border-2 rounded-lg justify-around py-2 "><MdOutlineMail /><input type="email" placeholder="Your Email"  className="text-white outline-none text-base bg-black"/><IoIosArrowRoundForward/> </div>

//             </ul>
//         </div>
//       </div>
//       {/* bottom */}
//       <div className="flex w-full justify-around items-center">
//         <div>cards</div>
//         <div><h2 className="flex items-center gap-2"><LuCopyright/> 2025 Krist All  Rights are Reserved</h2></div>
//         <div className="flex gap-5 text-2xl"><LuFacebook/><LuInstagram/><RiTwitterXFill/></div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Logo from "../../../assets/Logo2.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCopyright, LuFacebook, LuInstagram } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import Card from '../../../assets/card.png'
import GooglePay from '../../../assets/googlepay.png'
import Paypal from '../../../assets/paypal.png'
import Visa from '../../../assets/visa.png'

const Footer = () => {
  return (
    <div className="w-full bg-black text-white p-10 px-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-5">
        {/* Contact Section */}
        <div className="space-y-5">
          <div className="w-20">
            <img src={Logo} alt="Brand Logo" className="w-full" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform duration-100">
              <IoCallOutline /> (704) 55 55 555 55
            </li>
            <li className="flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform duration-100">
              <MdOutlineMail /> kristshop@example.com
            </li>
            <li className="flex items-center gap-2 hover:scale-105 cursor-pointer transition-transform duration-100">
              <MdOutlineLocationOn /> location 325455
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="space-y-3">
          <h2 className="font-semibold">Information</h2>
          <ul className="space-y-3">
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">My account</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Login</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">My Cart</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">My Wishlist</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Checkout</li>
          </ul>
        </div>

        {/* Service Section */}
        <div className="space-y-3">
          <h2 className="font-semibold">Service</h2>
          <ul className="space-y-3">
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">About Us</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Careers</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Delivery Information</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Privacy Policy</li>
            <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Terms & Conditions</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-5 ">
          <h2 className="font-semibold">Subscribe</h2>
          <p >
            Enter your email below to be the first to know about new collections
            and launches
          </p>
          <div className="flex items-center justify-between border-2 border-gray-400  rounded-lg py-2 px-3 ">
            <MdOutlineMail className="w-6 h-6 text-white flex-shrink-0" />{" "}
            {/* Fixed size and alignment */}
            <input
              type="email"
              placeholder="Your Email"
              className=" flex-shrink-0 lg:w-[80%]  text-white bg-black outline-none text-sm px-2"
            />
            <IoIosArrowRoundForward className="w-6 h-6 text-white flex-shrink-0" />{" "}
            {/* Fixed size and alignment */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-8 space-y-5 md:space-y-0">
        <div className="flex gap-2">
          <div className="w-10 ">
            <img src={Card} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="w-10 ">
            <img src={GooglePay} alt="" className=" w-full h-full object-cover"/>
          </div>
          <div className="w-10 ">
            <img src={Paypal} alt="" className=" w-full h-full object-cover"/>
          </div>
          <div className="w-10 ">
            <img src={Visa} alt="" className=" w-full h-full object-cover"/>
          </div>
        </div>
        <div>
          <h2 className="flex items-center gap-2">
            <LuCopyright /> 2025 Krist All Rights Reserved
          </h2>
        </div>
        <div className="flex gap-5 text-2xl">
          <LuFacebook  className="hover:scale-110 hover:text-blue-400 cursor-pointer border w-10 h-10 p-2 rounded-lg transition-transform duration-100"/>
          <LuInstagram className="hover:scale-110 hover:text-orange-400  cursor-pointer border w-10 h-10 p-2 rounded-lg transition-transform duration-100"/>
          <RiTwitterXFill className="hover:scale-110  cursor-pointer border w-10 h-10 p-2 rounded-lg transition-transform duration-100"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
