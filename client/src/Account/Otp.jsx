// import React, { useState } from "react";
// import OtpModel from "../assets/OtpModel.png";
// import Logo from "../assets/Logo.png";
// import { FaLessThan } from "react-icons/fa6";
// import { OtpVerifyApi } from "../ApiCall/UserApiCalls";
// const Otp = () => {
//   const [otp, setOtp] = useState("");
//   const OtpSend = async () => {
//     try {
//       const response = OtpVerifyApi(otp);

//     } catch (error) {

//     }

//   };
//   return (
//     <div className="w-full h-full flex flex-col md:flex-row ">
//       <div className="relative w-full md:w-1/2 h-full ">
//         <img src={OtpModel} alt="" className="md:w-[85%] w-full h-full  " />
//         <div className="absolute left-5 top-5 w-28">
//           {" "}
//           <img src={Logo} alt="" className=" w-full h-full object-cover" />
//         </div>
//       </div>
//       <div className="md:w-1/2 h-full flex  items-center">
//         <div className="w-full md:w-3/4 p-10">
//           <h2 className="my-2 flex items-center text-center gap-2">
//             {" "}
//             <FaLessThan className="size-4" />
//             Back
//           </h2>
//           <h2 className="text-4xl font-medium mb-2">Enter OTP</h2>
//           <p className="text-sm text-gray-500 mb-2">
//             We have share a code to your registered email address{" "}
//             <span>email@gmail.com</span>
//           </p>
//           <div className="w-full flex flex-col gap-2 my-5">
//             <div className="w-full flex  gap-2">
//               <input
//                 type="text"
//                 className="border-2 w-14 border-black rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 className="border-2 w-14 border-black rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 className="border-2 w-14 border-black rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 className="border-2 w-14 border-black rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 className="border-2 w-14 border-black rounded-lg p-2"
//               />
//             </div>
//           </div>
//           <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

// import React, { useState } from "react";
// import OtpModel from "../assets/OtpModel.png";
// import Logo from "../assets/Logo.png";
// import { FaLessThan } from "react-icons/fa6";
// import { OtpVerifyApi } from "../ApiCall/UserApiCalls";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", "", ""]);

//   const handleChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return; // Allow only numbers
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Auto-focus next input
//     if (value && index < 4) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const OtpSend = async () => {
//     try {
//       const otpCode = otp.join(""); // Convert array to string
//       if (otpCode.length < 5) return alert("Enter complete OTP!");
//       console.log(otpCode);

//       // const response = await OtpVerifyApi(otpCode);
//       console.log("Response:", response);
//     } catch (error) {
//       console.error("OTP Verification Failed:", error);
//     }
//   };

//   return (
//     <div className="w-full h-full flex flex-col md:flex-row">
//       {/* Left Section */}
//       <div className="relative w-full md:w-1/2 h-full">
//         <img src={OtpModel} alt="OTP Model" className="md:w-[85%] w-full h-full" />
//         <div className="absolute left-5 top-5 w-28">
//           <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2 h-full flex items-center">
//         <div className="w-full md:w-3/4 p-10">
//           <h2 className="my-2 flex items-center gap-2 cursor-pointer">
//             <FaLessThan className="size-4" />
//             Back
//           </h2>
//           <h2 className="text-4xl font-medium mb-2">Enter OTP</h2>
//           <p className="text-sm text-gray-500 mb-2">
//             We have sent a code to your registered email address <span>email@gmail.com</span>
//           </p>

//           {/* OTP Input Fields */}
//           <div className="flex justify-center gap-2 my-5">
//             {otp.map((value, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 maxLength="1"
//                 value={value}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 className="border-2 w-14 text-center text-lg border-black rounded-lg p-2"
//               />
//             ))}
//           </div>

//           {/* Verify Button */}
//           <button onClick={OtpSend} className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;

import React, { useEffect, useState } from "react";
import OtpModel from "../assets/OtpModel.png";
import Logo from "../assets/Logo.png";
import { FaLessThan } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { OtpVerifyUser } from "../Redux/AuthSlice";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const { user, isLoading } = useSelector((state) => state.auth);
  console.log(user);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const OtpSend = async () => {
    try {
      const otpCode = otp.join("");
      if (otpCode.length < 5) return toast.error("Enter complete OTP!");
      dispatch(OtpVerifyUser(otpCode));
      navigate("/");
    } catch (error) {
      console.error("OTP Verification Failed:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      console.error("User data is missing, redirecting...");
      // navigate("/login"); // Redirect to login if user is missing
    }
  }, [user, navigate]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 h-full">
        <img
          src={OtpModel}
          alt="OTP Model"
          className="md:w-[85%] w-full h-full"
        />
        <div className="absolute left-5 top-5 w-28">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 h-full flex items-center">
        <div className="w-full md:w-3/4 p-10">
          <Link to={"/login"}>
            <h2 className="my-2 flex items-center gap-2 cursor-pointer">
              <FaLessThan className="size-4" />
              Back
            </h2>
          </Link>
          <h2 className="text-4xl font-medium mb-2">Enter OTP</h2>
          <p className="text-sm text-gray-500 mb-2">
            We have sent a code to your registered email address{" "}
            <span className="text-base font-medium text-slate-800">
              {user?.email}
            </span>
          </p>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-2 my-5">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="border-2 w-14 text-center text-lg border-black rounded-lg p-2"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={OtpSend}
            className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white flex justify-center"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
