// import React, { useEffect, useState } from "react";
// import image from "../../../assets/Post5.jpg";
// import { TbEdit } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { fetchUserDetails } from "../../../ApiCall/UserApiCalls";
// const Profile = () => {
//   console.log("Profile");
//   const { user } = useSelector((state) => state.auth);
//   const [userData, setUserData] = useState({});
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetchUserDetails(user._id);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Failed to fetch user data:", error);
//       }
//     };
//     fetchUserData();
//   }, []);
//   return (
//     <div>
//       <div className="flex justify-between">
//         <div className="flex gap-5 p-5  items-center">
//           <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden">
//             <img
//               src={image}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <p className="text-lg">Welcome 👋</p>
//             <h2 className="font-semibold text-lg">{user?.username}</h2>
//           </div>
//         </div>
//         <div>
//           <button className="bg-black text-white py-3 px-5 rounded-lg flex  items-center gap-3">
//             <TbEdit />
//             Edit Profile
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 ">
//         <div className="space-y-2">
//           <label htmlFor="" className="font-medium ">
//             First Name
//           </label>
//           <div className="border py-3 px-2 rounded-lg border-black"> Name </div>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="" className="font-medium ">
//             Last Name
//           </label>
//           <div className="border py-3 rounded-lg border-black px-2">
//             Name 2{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="" className="font-medium ">
//             Phone Number
//           </label>
//           <div className="border py-3 rounded-lg border-black px-2">
//             7866546433513{" "}
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="" className="font-medium ">
//             Email Address
//           </label>
//           <div className="border py-3 rounded-lg border-black px-2">
//             Name@gmail{" "}
//           </div>
//         </div>
//       </div>
//       <div className="space-y-2 mt-2">
//         <label htmlFor="" className="font-medium ">
//           Address
//         </label>
//         <div className="border py-3 rounded-lg border-black px-2">Name </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import image from "../../../assets/Post5.jpg";
import { TbEdit } from "react-icons/tb";
import { useSelector } from "react-redux";
import { fetchUserDetails } from "../../../ApiCall/UserApiCalls";
import AddressCard from "../../../Components/User/Address/AddressCard";
const Profile = () => {
  console.log("Profile");
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchUserDetails();
        console.log(response);
        setUserData(response);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []);
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
            <h2 className="font-semibold text-lg">{user?.username}</h2>
          </div>
        </div>
        <div>
          <button className="bg-black text-white py-3 px-5 rounded-lg flex  items-center gap-3">
            <TbEdit />
            Edit Profile
          </button>
        </div>
      </div>
      {userData && (
        <div className="grid grid-cols-2 gap-4 ">
          <div className="space-y-2">
            <label htmlFor="" className="font-medium ">
              First Name
            </label>
            <div className="border py-3 px-2 rounded-lg border-black">
              {userData?.username || "Name"}
            </div>
          </div>
          {userData?.lastName && (
            <div className="space-y-2">
              <label htmlFor="" className="font-medium ">
                Last Name
              </label>

              <div className="border py-3 rounded-lg border-black px-2">
                {userData?.lastName || "Last Name "}
              </div>
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="" className="font-medium ">
              Phone Number
            </label>
            <div className="border py-3 rounded-lg border-black px-2">
              {userData?.phoneNumber || "Add Phone Number"}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="" className="font-medium ">
              Email Address
            </label>
            <div className="border py-3 rounded-lg border-black px-2">
              {userData?.email || "example@gmail.com"}
            </div>
          </div>
        </div>
      )}
      <div className="space-y-2 mt-2">
        <label htmlFor="" className="font-medium ">
          Address
        </label>
        {/* <div className="border py-3 rounded-lg border-black px-2">
          {userData?.address || "Add Address"}
        </div> */}
        <div>
          <AddressCard address={userData?.defaultAddress} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
