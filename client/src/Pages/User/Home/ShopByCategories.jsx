// import React from "react";
// import CategoryCard from "../../../Components/User/Home/CategoryCard";
// import { HiArrowSmallLeft } from "react-icons/hi2";
// import { HiArrowSmallRight } from "react-icons/hi2";
// const ShopByCategories = () => {
//   return (
//     <div className="w-full p-10">
//       <div className="flex justify-between w-full px-10">
//         <h2 className="text-3xl font-serif ">Shop By Categories</h2>
//         <div className="flex gap-2">
//           <button className="border-2 px-3 py-2"> <HiArrowSmallLeft /> </button>
//           <button className="border-2 px-3 py-2"> <HiArrowSmallRight /> </button>
//         </div>
//       </div>
//       <div className="w-full m-5 flex justify-center items-center">
//         <CategoryCard/>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategories;


import React, { useState } from "react";
import CategoryCard from "../../../Components/User/Home/CategoryCard";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const ShopByCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoriesPerPage = 5; // Define how many categories to show at once

  // Handle left and right arrow clicks
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - categoriesPerPage, 0));
  };

  const handleNext = (totalCategories) => {
    setCurrentIndex((prev) =>
      Math.min(prev + categoriesPerPage, totalCategories - categoriesPerPage)
    );
  };

  return (
    <div className="w-full p-10">
      <div className="flex justify-between w-full px-10 items-center">
        <h2 className="text-3xl font-medium font-serif">Shop By Categories</h2>
        <div className="flex gap-2">
          <button
            className="border-2 px-3 py-2 hover:bg-slate-300"
            onClick={handlePrev}
            aria-label="Previous Categories"
          >
            <HiArrowSmallLeft />
          </button>
          <button
            className="border-2 px-3 py-2 hover:bg-slate-300"
            onClick={() => handleNext(18)} // Pass total categories count here
            aria-label="Next Categories"
          >
            <HiArrowSmallRight />
          </button>
        </div>
      </div>
      <div className="w-full m-5 flex justify-center items-center">
        <CategoryCard currentIndex={currentIndex} categoriesPerPage={categoriesPerPage} />
      </div>
    </div>
  );
};

export default ShopByCategories;
