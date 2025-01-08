// import React from "react";
// import image from "../../../assets/Bags.png";
// import { CiHeart } from "react-icons/ci";
// import { AiOutlineEye } from "react-icons/ai";
// import { LiaCartPlusSolid } from "react-icons/lia";
// const Product = () => {
//   return (
//     <div className="m-5 flex gap-5">
//       <div className="w-52">
//         <div className="relative rounded-lg w-52 h-64 bg-slate-100">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-30 transition duration-300"></div>
//           <div className="absolute bottom-2 left-0 right-0 flex justify-center">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               Buy Now
//             </button>
//           </div>
//           <div className="">
//             <CiHeart />
//             <AiOutlineEye />
//             <LiaCartPlusSolid />
//           </div>
//         </div>

//         <div>
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm">description</p>
//           <p className="text-sm">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>
//       <div className="w-52">
//         <div className="w-52 h-64 bg-slate-100">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//         </div>
//         <div></div>
//         <div>
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm line-clamp-1">description</p>
//           <p className="text-sm ">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

// import React from "react";
// import image from "../../../assets/Bags.png";
// import { CiHeart } from "react-icons/ci";
// import { AiOutlineEye } from "react-icons/ai";
// import { LiaCartPlusSolid } from "react-icons/lia";

// const Product = () => {
//   return (
//     <div className="m-5 flex gap-5">
//       <div className="w-52">
//         <div className="relative rounded-lg w-52 h-64 bg-slate-100">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-30 transition duration-300"></div>

//           {/* Icons moved to the top-right corner */}
//           <div className="absolute top-2 right-2 flex flex-col gap-2">
//             <CiHeart className="text-white bg-black bg-opacity-50 p-1 rounded-full text-lg cursor-pointer hover:bg-opacity-80" />
//             <AiOutlineEye className="text-white bg-black bg-opacity-50 p-1 rounded-full text-lg cursor-pointer hover:bg-opacity-80" />
//             <LiaCartPlusSolid className="text-white bg-black bg-opacity-50 p-1 rounded-full text-lg cursor-pointer hover:bg-opacity-80" />
//           </div>

//           <div className="absolute bottom-2 left-0 right-0 flex justify-center">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         <div>
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm">description</p>
//           <p className="text-sm">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>

//       <div className="w-52">
//         <div className="w-52 h-64 bg-slate-100">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//         </div>
//         <div></div>
//         <div>
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm line-clamp-1">description</p>
//           <p className="text-sm ">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


// import React from "react";
// import image from "../../../assets/Bags.png";
// import { CiHeart } from "react-icons/ci";
// import { AiOutlineEye } from "react-icons/ai";
// import { LiaCartPlusSolid } from "react-icons/lia";

// const Product = () => {
//   return (
//     <div className="p-5 w-full overflow-x-auto flex flex-wrap rounded-lg shadow-sm  gap-5">

//       <div className="w-52">
//         <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

//           {/* Icons shown on hover */}
//           <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//           </div>

//           {/* Button shown on hover */}
//           <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         <div className="space-y-0.5 pl-1">
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm">description</p>
//           <p className="text-sm">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>

//       <div className="w-52">
//         <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

//           {/* Icons shown on hover */}
//           <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//           </div>

//           {/* Button shown on hover */}
//           <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         <div className="space-y-0.5 pl-1">
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm">description</p>
//           <p className="text-sm">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>

//       <div className="w-52">
//         <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
//           <img src={image} alt="" className="w-full h-full object-contain" />
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

//           {/* Icons shown on hover */}
//           <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//             <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
//           </div>

//           {/* Button shown on hover */}
//           <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               Buy Now
//             </button>
//           </div>
//         </div>

//         <div className="space-y-0.5 pl-1">
//           <h2 className="font-medium">name</h2>
//           <p className="text-sm">description</p>
//           <p className="text-sm">
//             $250<span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default Product;


import React from "react";
import image from "../../../assets/Bags.png";
import { CiHeart } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";

const Product = () => {
  return (
    <div className="p-5 w-full overflow-x-auto flex flex-wrap rounded-lg shadow-sm  gap-5">

      <div className="w-52">
        <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
          <img src={image} alt="" className="w-full h-full object-contain" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

          {/* Icons shown on hover */}
          <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Button shown on hover */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
              Buy Now
            </button>
          </div>
        </div>

        <div className="space-y-0.5 pl-1">
          <h2 className="font-medium">name</h2>
          <p className="text-sm">description</p>
          <p className="text-sm">
            $250<span className="line-through text-slate-600 pl-2">$800</span>
          </p>
        </div>
      </div>

      <div className="w-52">
        <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
          <img src={image} alt="" className="w-full h-full object-contain" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

          {/* Icons shown on hover */}
          <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Button shown on hover */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
              Buy Now
            </button>
          </div>
        </div>

        <div className="space-y-0.5 pl-1">
          <h2 className="font-medium">name</h2>
          <p className="text-sm">description</p>
          <p className="text-sm">
            $250<span className="line-through text-slate-600 pl-2">$800</span>
          </p>
        </div>
      </div>

      <div className="w-52">
        <div className="relative rounded-lg w-52 h-64 bg-slate-50 group">
          <img src={image} alt="" className="w-full h-full object-contain" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

          {/* Icons shown on hover */}
          <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <AiOutlineEye className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
            <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Button shown on hover */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
              Buy Now
            </button>
          </div>
        </div>

        <div className="space-y-0.5 pl-1">
          <h2 className="font-medium">name</h2>
          <p className="text-sm">description</p>
          <p className="text-sm">
            $250<span className="line-through text-slate-600 pl-2">$800</span>
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Product;