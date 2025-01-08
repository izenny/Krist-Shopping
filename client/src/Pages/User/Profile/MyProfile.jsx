// // import React from "react";
// // import image from "../../../assets/Bags.png";
// // const MyProfile = () => {
// //   return (
// //     <div className="p-10">
// //       <h2 className="text-2xl font-bold mb-4">My Profile</h2>
// //       <div className="flex flex-row">
// //         <div className="border w-1/4 ">
// //           <div className="flex gap-5 p-5 border-b">
// //             <div className="w-20 bg-slate-100 rounded-full">
// //               <img
// //                 src={image}
// //                 alt=""
// //                 className="w-full h-full object-contain"
// //               />
// //             </div>
// //             <div className="flex flex-col  justify-center ">
// //               <p className="text-lg">hello </p>
// //               <h2 className="font-semibold text-lg">name</h2>
// //             </div>
// //           </div>
// //           <div className="">
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">
// //               <h2>Personal Information</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">

// //               <h2>My Orders</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">

// //               <h2>My Whishlists</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">

// //               <h2>Manage Addresses</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">

// //               <h2>Saved Cards</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4 ">

// //               <h2>Notifiactaions</h2>
// //             </div>
// //             <div className=" cursor-pointer text-lg font-medium hover:bg-black hover:text-white py-4">

// //               <h2>Settings</h2>
// //             </div>
// //           </div>
// //         </div>
// //         <div>
// //         for corresponding pages here
// //       </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default MyProfile;

// import React, { useState } from "react";
// import image from "../../../assets/Bags.png";
// import { FaBell, FaBoxOpen, FaCreditCard, FaHeart, FaUser } from "react-icons/fa6";
// import { IoCog } from "react-icons/io5";
// import { LiaMapMarkerAltSolid } from "react-icons/lia";

// const MyProfile = () => {
//   const [activeSection, setActiveSection] = useState("Personal Information");
//   const menuItems = [
//     { name: "Personal Information", icon: <FaUser /> },
//     { name: "My Orders", icon: <FaBoxOpen /> },
//     { name: "My Wishlists", icon: <FaHeart /> },
//     { name: "Manage Addresses", icon: <LiaMapMarkerAltSolid /> },
//     { name: "Saved Cards", icon: <FaCreditCard /> },
//     { name: "Notifications", icon: <FaBell /> },
//     { name: "Settings", icon: <IoCog /> },
//   ];

//   const renderContent = () => {
//     switch (activeSection) {
//       case "Personal Information":
//         return <p>This is your personal information section.</p>;
//       case "My Orders":
//         return <p>Here are your orders.</p>;
//       case "My Wishlists":
//         return <p>Here are your wishlists.</p>;
//       case "Manage Addresses":
//         return <p>Manage your addresses here.</p>;
//       case "Saved Cards":
//         return <p>Here are your saved cards.</p>;
//       case "Notifications":
//         return <p>Manage your notifications here.</p>;
//       case "Settings":
//         return <p>Adjust your settings here.</p>;
//       default:
//         return <p>Select a menu item to view content.</p>;
//     }
//   };

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//       <div className="flex flex-row">
//         {/* Sidebar */}
//         <div className="border w-1/4">
//           <div className="flex gap-5 p-5 border-b items-center">
//             <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden">
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <p className="text-lg">Welcome,</p>
//               <h2 className="font-semibold text-lg">[User Name]</h2>
//             </div>
//           </div>
//           <div className="">
//             {menuItems.map((item) => (
//               <div
//                 key={item}
//                 onClick={() => setActiveSection(item)}
//                 className={`cursor-pointer flex gap-4 items-center text-lg font-medium py-4 px-5 ${
//                   activeSection === item
//                     ? "bg-black text-white"
//                     : "hover:bg-gray-300 hover:text-black"
//                 }`}
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 {item.name}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="w-3/4 p-5">
//           <h3 className="text-xl font-semibold mb-4">{activeSection}</h3>
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useState } from "react";
import image from "../../../assets/Bags.png";
import { FaBell, FaBoxOpen, FaCreditCard, FaHeart, FaUser } from "react-icons/fa6";
import { IoCog } from "react-icons/io5";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");

  const menuItems = [
    { name: "Personal Information", icon: <FaUser /> },
    { name: "My Orders", icon: <FaBoxOpen /> },
    { name: "My Wishlists", icon: <FaHeart /> },
    { name: "Manage Addresses", icon: <LiaMapMarkerAltSolid /> },
    { name: "Saved Cards", icon: <FaCreditCard /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Settings", icon: <IoCog /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Personal Information":
        return <p>This is your personal information section.</p>;
      case "My Orders":
        return <p>Here are your orders.</p>;
      case "My Wishlists":
        return <p>Here are your wishlists.</p>;
      case "Manage Addresses":
        return <p>Manage your addresses here.</p>;
      case "Saved Cards":
        return <p>Here are your saved cards.</p>;
      case "Notifications":
        return <p>Manage your notifications here.</p>;
      case "Settings":
        return <p>Adjust your settings here.</p>;
      default:
        return <p>Select a menu item to view content.</p>;
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="border w-1/4">
          <div className="flex gap-5 p-5 border-b items-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg">Welcome,</p>
              <h2 className="font-semibold text-lg">[User Name]</h2>
            </div>
          </div>
          <div>
            {menuItems.map((item) => (
              <div
                key={item.name} // Use item.name as the key
                onClick={() => setActiveSection(item.name)} // Pass item.name
                className={`cursor-pointer flex gap-4 items-center text-lg font-medium py-4 px-5 ${
                  activeSection === item.name
                    ? "bg-black text-white"
                    : "hover:bg-gray-300 hover:text-black"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-3/4 p-5">
          <h3 className="text-xl font-semibold mb-4">{activeSection}</h3>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
