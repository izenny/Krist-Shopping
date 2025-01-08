// import React, { useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const ProductFilter = () => {
//   const [fcate,setFcate] = useState(true)
//   return (
//     <div>
//       <div>
//         <h2>Product Categories</h2>
//         <IoIosArrowUp />
//         <IoIosArrowDown />
//       </div>
//       <div>
//         <h2>Filter by Price</h2>
//         <IoIosArrowUp />
//         <IoIosArrowDown />
//       </div>
//       <div>
//         <h2>Filter by Color</h2>
//         <IoIosArrowUp />
//         <IoIosArrowDown />
//       </div>
//       <div>
//         <h2>Filter by Size</h2>
//         <IoIosArrowUp />
//         <IoIosArrowDown />
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;


import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductFilter = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(true);
  const [priceVisible, setPriceVisible] = useState(true);
  const [colorVisible, setColorVisible] = useState(true);
  const [sizeVisible, setSizeVisible] = useState(true);

  const toggleVisibility = (setter) => setter((prev) => !prev);

  return (
    <div className="w-80 mx-auto mt-6 p-4   ">
      {/* Product Categories */}
      <div className="mb-4">
        <h2
          onClick={() => toggleVisibility(setCategoriesVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Product Categories
          {categoriesVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {categoriesVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Men
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Women
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Kids
            </label>
          </div>
        )}
      </div>

      {/* Filter by Price */}
      <div className="mb-4">
        <h2
          onClick={() => toggleVisibility(setPriceVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Price
          {priceVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {priceVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Under $50
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> $50 - $100
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Above $100
            </label>
          </div>
        )}
      </div>

      {/* Filter by Color */}
      <div className="mb-4">
        <h2
          onClick={() => toggleVisibility(setColorVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Color
          {colorVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {colorVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Black
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> White
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Blue
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Red
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> Green
            </label>
          </div>
        )}
      </div>

      {/* Filter by Size */}
      <div>
        <h2
          onClick={() => toggleVisibility(setSizeVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Size
          {sizeVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {sizeVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4" /> XS
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4 " /> S
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4 " /> M
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4 " /> L
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 size-4 " /> XL
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
