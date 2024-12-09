// import React from "react";
// import Tick from "../../assets/Tick.png";
// const Successfull = () => {
//   return (
//     <div className="h-screen bg-slate-100 w-full flex justify-center items-center">
//       <div className="relative bg-white w-[26rem] h-[20rem] gap-4 flex flex-col justify-center items-center rounded-xl">
//         <div className="absolute bg-red-600 right-2 top-2 ">close</div>
//         <div className="">
//           <img src={Tick} alt="" />
//         </div>
//         <div className="flex flex-col justify-center items-center gap-2">
//           <h2 className="text-2xl font-medium">
//             Password Changed Successfully
//           </h2>
//           <p className="text-sm">Your password has been updated successfully</p>
//         </div>
//         <div className="w-1/2">
//           <button className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white">
//             Back to Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Successfull;

import React from "react";
import Tick from "../../assets/Tick.png";

const Successful = ({ onClose, onBackToLogin }) => {
  return (
    <div className="h-screen bg-slate-100 w-full flex justify-center p-2 items-center">
      <div className="relative bg-white w-full max-w-md p-6 gap-4 flex flex-col justify-center items-center rounded-xl shadow-md">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2  p-1 rounded-full"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Tick Icon */}
        <div>
          <img src={Tick} alt="Success Tick Icon" className="w-fit h-fit object-cover" />
        </div>

        {/* Success Message */}
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <h2 className="text-2xl font-medium">Password Changed Successfully</h2>
          <p className="text-sm text-gray-500">
            Your password has been updated successfully.
          </p>
        </div>

        {/* Back to Login Button */}
        <div className="w-3/4">
          <button
            className="w-full bg-black p-3 mt-2 rounded-lg hover:scale-105 text-white"
            onClick={onBackToLogin}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Successful;
