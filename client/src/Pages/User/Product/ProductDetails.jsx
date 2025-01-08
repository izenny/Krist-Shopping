// import React from "react";
// import ProductView from "../../../Components/User/Product/ProductView";
// import Description from "../../../Components/User/Product/Description";
// import MoreDetails from "../../../Components/User/Product/MoreDetails";
// import Review from "../../../Components/User/Product/Review";

// const ProductDetails = () => {
//   return (
//     <div className="w-full">
//       <ProductView />
//       <div className="w-full px-10 ">
//         <div className="flex gap-5  ">
//           <div className="text-xl font-medium border-b-0 border-2 p-2 rounded-md   ">Description</div>
//           <div className="text-xl font-medium">More details</div>
//           <div className="text-xl font-medium">Reviews</div>
//         </div>
//         <div>
//           <Description />
//           <MoreDetails />
//           <Review />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import React, { useState } from "react";
// import ProductView from "../../../Components/User/Product/ProductView";
// import Description from "../../../Components/User/Product/Description";
// import MoreDetails from "../../../Components/User/Product/MoreDetails";
// import Review from "../../../Components/User/Product/Review";

// const ProductDetails = () => {
//   // State to track the active tab
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="w-full">
//       {/* Product View */}
//       <ProductView />

//       {/* Tabs */}
//       <div className="w-full px-10 ">
//         <div className="flex gap-5">
//           {/* Description Tab */}
//           <button
//             className={`text-xl font-medium p-2 rounded-t-md  rounded-[-12px] ${
//               activeTab === "description" ? "border-b-0 border-2 border-black" : ""
//             }`}
//             onClick={() => setActiveTab("description")}
//           >
//             Description
//           </button>

//           {/* More Details Tab */}
//           <button
//             className={`text-xl font-medium p-2 rounded-md ${
//               activeTab === "moreDetails" ? "border-b-2  border-black" : ""
//             }`}
//             onClick={() => setActiveTab("moreDetails")}
//           >
//             More Details
//           </button>

//           {/* Reviews Tab */}
//           <button
//             className={`text-xl font-medium p-2 rounded-md ${
//               activeTab === "reviews" ? "border-b-2  border-black" : ""
//             }`}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//         </div>

//         {/* Dynamic Content Based on Active Tab */}
//         <div className="mt-5">
//           {activeTab === "description" && <Description />}
//           {activeTab === "moreDetails" && <MoreDetails />}
//           {activeTab === "reviews" && <Review />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import ProductView from "../../../Components/User/Product/ProductView";
import Description from "../../../Components/User/Product/Description";
import MoreDetails from "../../../Components/User/Product/MoreDetails";
import Review from "../../../Components/User/Product/Review";
import Product from "../../../Components/User/Product/Product";
import PayAdCard from "../../../Components/User/Home/PayAdCard";
import ProductReview from "../../../Components/User/Product/ProductReview";

const ProductDetails = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full mt-5">
      {/* Product View */}
      <ProductView />

      {/* Folder-Style Tabs */}
      <div className="w-full md:px-10 px-2 ">
        <div className="flex gap-5">
          {/* Description Tab */}
          <button
            className={`relative md:text-xl font-medium px-4 py-2 rounded-t-md ${
              activeTab === "description"
                ? "bg-gray-100 shadow-inner"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          {/* More Details Tab */}
          <button
            className={`relative md:text-xl font-medium px-4 py-2 rounded-t-md ${
              activeTab === "moreDetails"
                ? "bg-gray-100 shadow-inner "
                : "bg-white"
            }`}
            onClick={() => setActiveTab("moreDetails")}
          >
            More Details
          </button>

          {/* Reviews Tab */}
          <button
            className={`relative md:text-xl font-medium px-4 py-2 rounded-t-md ${
              activeTab === "reviews"
                ? "bg-gray-100 shadow-inner   "
                : "bg-white"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-100 mt-[-1px]  p-5 rounded-md shadow-md">
          {activeTab === "description" && <Description />}
          {activeTab === "moreDetails" && <MoreDetails />}
          {activeTab === "reviews" && <ProductReview/>}
        </div>
      </div>
      <div className="p-10 w-full my-5">
        <h2 className="text-2xl">Related Products</h2>
        <Product/>
      </div>
      <div className=" w-full ">
        <PayAdCard/>
      </div>
    </div>
  );
};

export default ProductDetails;
