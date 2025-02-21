// import React, { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const ProductFilter = ({ setFilter ,setCurrentPage}) => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedPriceRange, setSelectedPriceRange] = useState({
//     minPrice: "",
//     maxPrice: "",
//   });
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedGender, setSelectedGender] = useState([]); // Gender filter state

//   const [categoriesVisible, setCategoriesVisible] = useState(true);
//   const [priceVisible, setPriceVisible] = useState(true);
//   const [colorVisible, setColorVisible] = useState(true);
//   const [sizeVisible, setSizeVisible] = useState(true);
//   const [genderVisible, setGenderVisible] = useState(true); // Toggle for gender filter

//   const categoryMapping = {
//     blazer: "Blazers & Coats",
//     coat: "Blazers & Coats",
//     boot: "Boots",
//     "casual shirt": "Casual Shirts",
//     dress: "Dresses",
//     flat: "Flats",
//     "formal shirt": "Formal Shirts",
//     heel: "Heels",
//     jacket: "Jackets",
//     kurta: "Kurtas & Kurta Sets",
//     suit: "Kurtas & Suits",
//     saree: "Sarees",
//     sherwani: "Sherwanis",
//     "t-shirt": "T-Shirts",
//     others: "Others",
//   };

//   const genders = ["Men", "Women", "Boys", "Girls"]; // Gender options

//   const allNewColors = [
//     "Maroon",
//     "Olive Green",
//     "Charcoal",
//     "Peach",
//     "Teal",
//     "Mint Green",
//     "Steel Blue",
//     "Dark Green",
//     "Burgundy",
//     "Navy",
//     "Chocolate Brown",
//     "Coral",
//     "Lavender",
//     "Ash Grey",
//     "Mustard",
//     "Wine Red",
//     "Ivory",
//     "Neon Green",
//     "Royal Blue",
//     "Burnt Orange",
//     "Slate Blue",
//     "Taupe",
//     "Dusty Rose",
//     "Forest Green",
//     "Seafoam",
//     "Charcoal Grey",
//     "Midnight Blue",
//     "Rust Brown",
//     "Deep Purple",
//     "Olive Brown",
//     "Sunflower Yellow",
//     "Sky Blue",
//     "Graphite",
//     "Cognac",
//     "Blush Pink",
//     "Champagne",
//     "Lime Green",
//     "Electric Blue",
//   ];

//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedCategories((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   const handlePriceChange = (min, max) => {
//     setSelectedPriceRange({ minPrice: min, maxPrice: max });
//   };

//   const handleColorChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedColors((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   const handleSizeChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedSizes((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   const handleGenderChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedGender((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   useEffect(() => {
//     setFilter({
//       category: selectedCategories.join(","),
//       minPrice: selectedPriceRange.minPrice || "",
//       maxPrice: selectedPriceRange.maxPrice || "",
//       color: selectedColors.join(","),
//       size: selectedSizes.join(","),
//       gender: selectedGender.join(","), // Include gender in the filter
//     });
//     setCurrentPage(1)
//   }, [
//     selectedCategories,
//     selectedPriceRange,
//     selectedColors,
//     selectedSizes,
//     selectedGender,
//   ]);

//   return (
//     <div className="w-80 mx-auto h-full p-4 border rounded-lg shadow-md">
//       {/* Filter by Gender */}
//       <div>
//         <h2
//           onClick={() => setGenderVisible(!genderVisible)}
//           className="flex justify-between items-center text-lg font-semibold cursor-pointer"
//         >
//           Filter by Gender
//           {genderVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </h2>
//         {genderVisible && (
//           <div className="mt-2 space-y-2 pl-4 text-gray-700">
//             {genders.map((gender) => (
//               <label key={gender} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={gender.toLowerCase()}
//                   onChange={handleGenderChange}
//                   className="mr-2 size-4"
//                 />{" "}
//                 {gender}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Product Categories */}
//       <div className="mb-4">
//         <h2
//           onClick={() => setCategoriesVisible(!categoriesVisible)}
//           className="flex justify-between items-center text-lg font-semibold cursor-pointer"
//         >
//           Product Categories
//           {categoriesVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </h2>
//         {categoriesVisible && (
//           <div className="mt-2 space-y-2 pl-4 text-gray-700 max-h-60 overflow-y-auto">
//             {Object.entries(categoryMapping).map(([key, value]) => (
//               <label key={key} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={key}
//                   onChange={handleCategoryChange}
//                   className="mr-2 size-4"
//                 />{" "}
//                 {value}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Filter by Price */}
//       <div className="mb-4">
//         <h2
//           onClick={() => setPriceVisible(!priceVisible)}
//           className="flex justify-between items-center text-lg font-semibold cursor-pointer"
//         >
//           Filter by Price
//           {priceVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </h2>
//         {priceVisible && (
//           <div className="mt-2 space-y-2 pl-4 text-gray-700">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => handlePriceChange(0, 500)}
//                 className="mr-2 size-4"
//               />{" "}
//               Under $500
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => handlePriceChange(500, 1000)}
//                 className="mr-2 size-4"
//               />{" "}
//               $500- $1000
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => handlePriceChange(1000, 5000)}
//                 className="mr-2 size-4"
//               />{" "}
//               $1000 - $5000
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => handlePriceChange(5000, "")}
//                 className="mr-2 size-4"
//               />{" "}
//               Above $5000
//             </label>
//           </div>
//         )}
//       </div>

//       {/* Filter by Color */}
//       <div className="mb-4">
//         <h2
//           onClick={() => setColorVisible(!colorVisible)}
//           className="flex justify-between items-center text-lg font-semibold cursor-pointer"
//         >
//           Filter by Color
//           {colorVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </h2>
//         {colorVisible && (
//           <div className="mt-2 space-y-2 pl-4 text-gray-700 max-h-60 overflow-y-auto">
//             {allNewColors.map((color, index) => (
//               <label key={index} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={color.toLowerCase()}
//                   onChange={handleColorChange}
//                   className="mr-2 size-4"
//                 />{" "}
//                 {color}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Filter by Size */}
//       <div className="mb-4">
//         <h2
//           onClick={() => setSizeVisible(!sizeVisible)}
//           className="flex justify-between items-center text-lg font-semibold cursor-pointer"
//         >
//           Filter by Size
//           {sizeVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </h2>
//         {sizeVisible && (
//           <div className="mt-2 space-y-2 pl-4 text-gray-700">
//             {["XS", "S", "M", "L", "XL"].map((size) => (
//               <label key={size} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   value={size.toLowerCase()}
//                   onChange={handleSizeChange}
//                   className="mr-2 size-4"
//                 />{" "}
//                 {size}
//               </label>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;

import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductFilter = ({ setSearchParams, setCurrentPage }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]); // Gender filter state

  const [categoriesVisible, setCategoriesVisible] = useState(true);
  const [priceVisible, setPriceVisible] = useState(true);
  const [colorVisible, setColorVisible] = useState(true);
  const [sizeVisible, setSizeVisible] = useState(true);
  const [genderVisible, setGenderVisible] = useState(true); // Toggle for gender filter

   const categoryMapping = {
    "blazer": "Blazers & Coats",
    "coat": "Blazers & Coats",
   " boot": "Boots",
    "casual shirt": "Casual Shirts",
    "dress": "Dresses",
    "flat": "Flats",
    "formal shirt": "Formal Shirts",
    "heel": "Heels",
   " jacket": "Jackets",
   " kurta": "Kurtas & Kurta Sets",
    "suit": "Kurtas & Suits",
    "saree": "Sarees",
    "sherwani": "Sherwanis",
    "t-shirt": "T-Shirts",
    "others": "Others",
  };

  const genders = ["Men", "Women", "Boys", "Girls"]; // Gender options

  const allNewColors = [
    "Maroon",
    "Olive Green",
    "Charcoal",
    "Peach",
    "Teal",
    "Mint Green",
    "Steel Blue",
    "Dark Green",
    "Burgundy",
    "Navy",
    "Chocolate Brown",
    "Coral",
    "Lavender",
    "Ash Grey",
    "Mustard",
    "Wine Red",
    "Ivory",
    "Neon Green",
    "Royal Blue",
    "Burnt Orange",
    "Slate Blue",
    "Taupe",
    "Dusty Rose",
    "Forest Green",
    "Seafoam",
    "Charcoal Grey",
    "Midnight Blue",
    "Rust Brown",
    "Deep Purple",
    "Olive Brown",
    "Sunflower Yellow",
    "Sky Blue",
    "Graphite",
    "Cognac",
    "Blush Pink",
    "Champagne",
    "Lime Green",
    "Electric Blue",
  ];

  const updateFilters = () => {
    const params = {};
    if (selectedCategories.length)
      params.category = selectedCategories.join(",");
    const minPrice = selectedPriceRange.minPrice
      ? Number(selectedPriceRange.minPrice)
      : null;
    const maxPrice = selectedPriceRange.maxPrice
      ? Number(selectedPriceRange.maxPrice)
      : null;

    if (selectedCategories.length)
      params.category = selectedCategories.join(",");
    if (minPrice !== null && !isNaN(minPrice)) params.minPrice = minPrice;
    if (maxPrice !== null && !isNaN(maxPrice)) params.maxPrice = maxPrice;

    if (selectedColors.length) params.color = selectedColors.join(",");
    if (selectedSizes.length) params.size = selectedSizes.join(",");
    if (selectedGender.length) params.gender = selectedGender.join(",");

    setSearchParams(params);
    setCurrentPage(1); // Reset to page 1 on filter change
  };
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handlePriceChange = (min, max) => {
    setSelectedPriceRange({ minPrice: min, maxPrice: max });
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedColors((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedSizes((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleGenderChange = (e) => {
    const { value, checked } = e.target;
    setSelectedGender((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="w-80 mx-auto h-full p-4 border rounded-lg shadow-md">
      <button
        onClick={updateFilters}
        className="w-full bg-black hover:scale-105 transition-transform text-white py-2 rounded-md mb-4"
      >
        Apply Filters
      </button>
      {/* Filter by Gender */}
      <div>
        <h2
          onClick={() => setGenderVisible(!genderVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Gender
          {genderVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {genderVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            {genders.map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="checkbox"
                  value={gender.toLowerCase()}
                  onChange={handleGenderChange}
                  className="mr-2 size-4"
                />{" "}
                {gender}
              </label>
            ))}
          </div>
        )}
      </div>
      {/* Product Categories */}
      <div className="mb-4">
        <h2
          onClick={() => setCategoriesVisible(!categoriesVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Product Categories
          {categoriesVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {categoriesVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700 max-h-60 overflow-y-auto">
            {Object.entries(categoryMapping).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleCategoryChange}
                  className="mr-2 size-4"
                />{" "}
                {value}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Filter by Price */}
      <div className="mb-4">
        <h2
          onClick={() => setPriceVisible(!priceVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Price
          {priceVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {priceVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(0, 500)}
                className="mr-2 size-4"
              />{" "}
              Under $500
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(500, 1000)}
                className="mr-2 size-4"
              />{" "}
              $500- $1000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(1000, 5000)}
                className="mr-2 size-4"
              />{" "}
              $1000 - $5000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(5000, "")}
                className="mr-2 size-4"
              />{" "}
              Above $5000
            </label>
          </div>
        )}
      </div>

      {/* Filter by Color */}
      <div className="mb-4">
        <h2
          onClick={() => setColorVisible(!colorVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Color
          {colorVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {colorVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700 max-h-60 overflow-y-auto">
            {allNewColors.map((color, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  value={color.toLowerCase()}
                  onChange={handleColorChange}
                  className="mr-2 size-4"
                />{" "}
                {color}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Filter by Size */}
      <div className="mb-4">
        <h2
          onClick={() => setSizeVisible(!sizeVisible)}
          className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        >
          Filter by Size
          {sizeVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h2>
        {sizeVisible && (
          <div className="mt-2 space-y-2 pl-4 text-gray-700">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="checkbox"
                  value={size.toLowerCase()}
                  onChange={handleSizeChange}
                  className="mr-2 size-4"
                />{" "}
                {size}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
