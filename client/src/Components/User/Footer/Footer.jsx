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

const Footer = () => {
  return (
    <div className="w-full bg-black text-white p-5">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-5">
        {/* Contact Section */}
        <div className="space-y-5">
          <div className="w-20">
            <img src={Logo} alt="Brand Logo" className="w-full" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <IoCallOutline /> (704) 55 55 555 55
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMail /> kristshop@example.com
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineLocationOn /> location 325455
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="space-y-3">
          <h2 className="font-semibold">Information</h2>
          <ul className="space-y-3">
            <li>My account</li>
            <li>Login</li>
            <li>My Cart</li>
            <li>My Wishlist</li>
            <li>Checkout</li>
          </ul>
        </div>

        {/* Service Section */}
        <div className="space-y-3">
          <h2 className="font-semibold">Service</h2>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-3 ">
          <h2 className="font-semibold">Subscribe</h2>
          <p>
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
        <div>cards</div>
        <div>
          <h2 className="flex items-center gap-2">
            <LuCopyright /> 2025 Krist All Rights Reserved
          </h2>
        </div>
        <div className="flex gap-5 text-2xl">
          <LuFacebook />
          <LuInstagram />
          <RiTwitterXFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
