// import React from "react";
// import image from "../../../assets/Bags.png";
// import { CiHeart } from "react-icons/ci";

// const ProductView = () => {
//   return (
//     <div className="w-full flex flex-col md:flex-row gap-8 p-5">
//       {/* Image Section */}
//       <div className="md:w-1/2 flex flex-col items-center">
//         <div className="md:w-3/4 md:h-96 h-3/4 bg-gray-100 border rounded-lg overflow-hidden">
//           <img
//             src={image}
//             alt="Product"
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
//           {[...Array(4)].map((_, index) => (
//             <div
//               key={index}
//               className="w-20 h-20 border hover:bg-gray-300 cursor-pointer rounded-lg overflow-hidden"
//             >
//               <img
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Data Section */}
//       <div className="md:w-1/2 ">
//         <div className="md:w-3/4 flex flex-col gap-3">
//           <h2 className="text-2xl font-bold">Product Name</h2>
//           <p className="text-gray-600">
//             This is a short description of the product.
//           </p>
//           <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
//           <p className="text-xl font-semibold">
//             $250 <span className="line-through text-slate-600 pl-2">$800</span>
//           </p>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//             aliquid magnam neque veritatis itaque laboriosam modi aut vero
//             doloribus amet, eveniet, iusto corporis corrupti dolor ducimus,
//             deleniti a iste optio!
//           </p>

//           {/* Color Options */}
//           <div className="flex gap-2 items-center">
//             <span className="text-sm font-medium">Color:</span>
//             <div className="w-6 h-6 rounded-md bg-red-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-blue-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-green-500 cursor-pointer"></div>
//           </div>

//           {/* Size Options */}
//           <div className="flex gap-2 items-center">
//             <span className="text-sm font-medium">Size:</span>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XS
//             </div>

//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               S
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               M
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               L
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XL
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XXL
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4 mt-4">
//             {/* Quantity */}
//             <div className="flex items-center border rounded-md">
//               <button className="px-4 py-2 hover:bg-gray-300">-</button>
//               <div className="px-4">2</div>
//               <button className="px-4 py-2 hover:bg-gray-300">+</button>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="bg-black flex-1 text-white px-6 py-2 rounded-md hover:bg-gray-900">
//               Add to Cart
//             </button>

//             {/* Wishlist */}
//             <button className="text-black border rounded-md p-2 hover:bg-gray-300">
//               <CiHeart className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductView;

// import React, { useState } from "react";
// import image from "../../../assets/Bags.png";
// import { CiHeart } from "react-icons/ci";

// const ProductView = ({ product }) => {
//   const [viewImage,setViewImage] = useState()
//   return (
//     <div className="w-full flex flex-col md:flex-row gap-8 p-5">
//       {/* Image Section */}
//       <div className="md:w-1/2 flex flex-col items-center">
//         <div className="md:w-3/4 md:h-96 h-3/4  border rounded-lg overflow-hidden">
//           <img
//             // src={viewImage}
//             src={product?.images[0]?.url}
//             alt="Product"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
//           {product?.images?.map((image, index) => (
//             <div
//               key={index}
//               className="w-20 h-20 border hover:bg-gray-300 cursor-pointer rounded-lg overflow-hidden"
//             >
//               <img
//                 src={image?.url}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Data Section */}
//       <div className="md:w-1/2 ">
//         <div className="md:w-3/4 flex flex-col gap-3">
//           <h2 className="text-2xl font-bold">
//             {product?.name || "Product Name"}
//           </h2>
//           <p className="text-gray-800 text-lg font-medium">
//             {product?.brand || " This is a short description of the product."}
//           </p>
//           <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
//           <p className="text-xl font-semibold">
//             {product?.price}{" "}
//             <span className="line-through text-slate-600 pl-2">
//               {product?.orginalprice || "$800"}
//             </span>
//           </p>
//           <p className="text-gray-600">
//             {product?.description ||
//               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam"}
//           </p>

//           {/* Color Options */}
//           <div className="flex gap-2 items-center">
//             <span className="text-sm font-medium">Color:</span>
//             <div className="w-6 h-6 rounded-md bg-red-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-blue-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-green-500 cursor-pointer"></div>
//           </div>

//           {/* Size Options */}
//           <div className="flex gap-2 items-center">
//             <span className="text-sm font-medium">Size:</span>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XS
//             </div>

//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               S
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               M
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               L
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XL
//             </div>
//             <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
//               XXL
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4 mt-4">
//             {/* Quantity */}
//             <div className="flex items-center border rounded-md">
//               <button className="px-4 py-2 hover:bg-gray-300">-</button>
//               <div className="px-4">2</div>
//               <button className="px-4 py-2 hover:bg-gray-300">+</button>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="bg-black flex-1 text-white px-6 py-2 rounded-md hover:bg-gray-900">
//               Add to Cart
//             </button>

//             {/* Wishlist */}
//             <button className="text-black border rounded-md p-2 hover:bg-gray-300">
//               <CiHeart className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductView;

// import React, { useState, useEffect } from "react";
// import { CiHeart } from "react-icons/ci";

// const ProductView = ({ product }) => {
//   // Ensure product.images exists and has at least one image
//   const initialImage = product?.images?.length > 0 ? product.images[0].url : "";

//   const [viewImage, setViewImage] = useState(initialImage);

//   // Update viewImage if product changes (useful if data is fetched async)
//   useEffect(() => {
//     if (product?.images?.length > 0) {
//       setViewImage(product.images[0].url);
//     }
//   }, [product]);

//   const uniqueColors = Array.from(
//     new Set(product?.stock?.map((colour) => colour.color))
//   );
//   const uniqueSizes = Array.from(
//     new Set(product?.stock?.map((item) => item.size))
//   );

//   return (
//     <div className="w-full flex flex-col md:flex-row gap-8 p-5">
//       {/* Image Section */}
//       <div className="md:w-1/2 flex flex-col items-center">
//         <div className="md:w-3/4 md:h-96 h-3/4 border rounded-lg overflow-hidden">
//           {viewImage ? (
//             <img
//               src={viewImage}
//               alt="Product"
//               className="w-full h-full object-contain"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-gray-500">
//               No Image Available
//             </div>
//           )}
//         </div>

//         <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
//           {product?.images?.length > 0 ? (
//             product.images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`w-20 h-20 border cursor-pointer rounded-lg overflow-hidden ${
//                   viewImage === image.url ? "border-black border-2" : ""
//                 }`}
//                 onClick={() => setViewImage(image.url)}
//               >
//                 <img
//                   src={image.url}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No thumbnails available</p>
//           )}
//         </div>
//       </div>

//       {/* Data Section */}
//       <div className="md:w-1/2">
//         <div className="md:w-3/4 flex flex-col gap-3">
//           <h2 className="text-2xl font-bold">
//             {product?.name || "Product Name"}
//           </h2>
//           <p className="text-gray-800 text-lg font-medium">
//             {product?.brand || "No brand available"}
//           </p>
//           <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
//           <p className="text-xl font-semibold">
//             ₹{product?.price || "N/A"}{" "}
//             <span className="line-through text-slate-600 pl-2">
//               ₹{product?.orginalprice || "N/A"}
//             </span>
//           </p>
//           <p className="text-gray-600">
//             {product?.description || "No description available."}
//           </p>

//           {/* Color Options */}
//           <div className="flex gap-2 flex-wrap items-center">
//             <span className="text-sm font-medium">Color:</span>
//             {uniqueColors.map((color, index) => (
//               <div
//                 key={index}
//                 className="w-6 h-6 hover:scale-105 rounded-md cursor-pointer border border-gray-300"
//                 style={{
//                   backgroundColor: color.toLowerCase().replace(/\s+/g, ""),
//                 }}
//                 title={color}
//               ></div>
//             ))}

//             {/* <div className="w-6 h-6 rounded-md bg-red-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-blue-500 cursor-pointer"></div>
//             <div className="w-6 h-6 rounded-md bg-green-500 cursor-pointer"></div> */}
//           </div>

//           {/* Size Options */}
//           <div className="flex gap-2 items-center">
//             <span className="text-sm font-medium">Size:</span>
//             {uniqueSizes.map((size, index) => (
//               <div
//                 key={index}
//                 className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300"
//               >
//                 {size}
//               </div>
//             ))}
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4 mt-4">
//             <div className="flex items-center border rounded-md">
//               <button className="px-4 py-2 hover:bg-gray-300">-</button>
//               <div className="px-4">2</div>
//               <button className="px-4 py-2 hover:bg-gray-300">+</button>
//             </div>

//             <button className="bg-black flex-1 text-white px-6 py-2 rounded-md hover:bg-gray-900">
//               Add to Cart
//             </button>

//             <button className="text-black border rounded-md p-2 hover:bg-gray-300">
//               <CiHeart className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductView;


// ```````````````````
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

const ProductView = ({ product }) => {
  const initialImage = product?.images?.length > 0 ? product.images[0].url : "";
  const [viewImage, setViewImage] = useState(initialImage);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const colorHexMap = {
    "Burnt Orange": "#CC5500",
    "Slate Blue": "#6A5ACD",
    "Taupe": "#483C32",
    "Dusty Rose": "#DCAE96",
    "Forest Green": "#228B22",
    "Seafoam": "#93E9BE",
    "Charcoal Grey": "#36454F",
    "Midnight Blue": "#191970",
    "Rust Brown": "#8B3103",
    "Deep Purple": "#4B0082",
    "Olive Brown": "#6B4226",
    "Sunflower Yellow": "#FFC512",
    "Sky Blue": "#87CEEB",
    "Graphite": "#53565A",
    "Cognac": "#9A463D",
    "Blush Pink": "#F4C2C2",
    "Champagne": "#F7E7CE",
    "Lime Green": "#32CD32",
    "Electric Blue": "#7DF9FF",
    "Maroon": "#800000",
    "Olive Green": "#556B2F",
    "Charcoal": "#36454F",
    "Peach": "#FFDAB9",
    "Teal": "#008080",
    "Mint Green": "#98FF98",
    "Steel Blue": "#4682B4",
    "Dark Green": "#006400",
    "Burgundy": "#800020",
    "Navy": "#000080",
    "Chocolate Brown": "#7B3F00",
    "Coral": "#FF7F50",
    "Lavender": "#E6E6FA",
    "Ash Grey": "#B2BEB5",
    "Mustard": "#FFDB58",
    "Wine Red": "#722F37",
    "Ivory": "#FFFFF0",
    "Neon Green": "#39FF14",
    "Royal Blue": "#4169E1",
    "Red": "#FF0000",
    "Blue": "#0000FF",
    "Black": "#000000",
    "White": "#FFFFFF",
    "Green": "#008000",
    "Grey": "#808080",
    "Navy Blue": "#000080",
    "Beige": "#F5F5DC",
    "Pink": "#FFC0CB",
    "Brown": "#A52A2A"
  };
  
  // Update viewImage if product changes (useful if data is fetched async)
  useEffect(() => {
    if (product?.images?.length > 0) {
      setViewImage(product.images[0].url);
    }
  }, [product]);

  // Extract unique colors and sizes from stock
  const uniqueColors = Array.from(new Set(product?.stock?.map((item) => item.color)));
  const uniqueSizes = Array.from(new Set(product?.stock?.map((item) => item.size)));

  // Get available sizes based on selected color
  const availableSizes = selectedColor
    ? product?.stock
        .filter((item) => item.color === selectedColor && item.quantity > 0)
        .map((item) => item.size)
    : uniqueSizes;

  // Get available colors based on selected size
  const availableColors = selectedSize
    ? product?.stock
        .filter((item) => item.size === selectedSize && item.quantity > 0)
        .map((item) => item.color)
    : uniqueColors;

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    
    // If selected size is no longer available for the new color, reset it
    const isSizeAvailable = product?.stock.some(
      (item) => item.color === color && item.size === selectedSize && item.quantity > 0
    );
    if (!isSizeAvailable) {
      setSelectedSize(null);
    }
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);

    // If selected color is no longer available for the new size, reset it
    const isColorAvailable = product?.stock.some(
      (item) => item.size === size && item.color === selectedColor && item.quantity > 0
    );
    if (!isColorAvailable) {
      setSelectedColor(null);
    }
  };

  // Send selected options to ordering system
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    const selectedStock = product.stock.find(
      (item) => item.color === selectedColor && item.size === selectedSize
    );

    if (!selectedStock || selectedStock.quantity === 0) {
      alert("Selected variant is out of stock.");
      return;
    }

    const orderDetails = {
      productId: product._id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: 1, // Default quantity
    };

    console.log("Adding to cart:", orderDetails);
    alert("Product added to cart successfully!");
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 p-5">
      {/* Image Section */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="md:w-3/4 md:h-96 h-3/4 border rounded-lg overflow-hidden">
          {viewImage ? (
            <img src={viewImage} alt="Product" className="w-full h-full object-contain" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
          {product?.images?.map((image, index) => (
            <div
              key={index}
              className={`w-20 h-20 border cursor-pointer rounded-lg overflow-hidden ${
                viewImage === image.url ? "border-black border-2" : ""
              }`}
              onClick={() => setViewImage(image.url)}
            >
              <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Data Section */}
      <div className="md:w-1/2">
        <div className="md:w-3/4 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{product?.name || "Product Name"}</h2>
          <p className="text-gray-800 text-lg font-medium">{product?.brand || "No brand available"}</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-xl font-semibold">
            ₹{product?.price || "N/A"}{" "}
            <span className="line-through text-slate-600 pl-2">₹{product?.orginalprice || "N/A"}</span>
          </p>
          <p className="text-gray-600">{product?.description || "No description available."}</p>

          {/* Color Options */}
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm font-medium">Color:</span>
            {uniqueColors.map((color, index) => (
              // <div
              //   key={index}
              //   className={`w-6 h-6 hover:scale-105 rounded-md cursor-pointer border ${
              //     selectedColor === color ? "border-black border-2" : "border-gray-300"
              //   } ${availableColors.includes(color) ? "" : "opacity-50 cursor-not-allowed"}`}
              //   style={{ backgroundColor: color.toLowerCase().replace(/\s+/g, "") }}
              //   title={color}
              //   onClick={() => availableColors.includes(color) && handleColorSelect(color)}
              // ></div>
           <div
  key={index}
  className={`w-6 h-6 hover:scale-105 rounded-md cursor-pointer border 
    ${selectedColor === color ? "border-black border-2" : "border-gray-300"}
    ${availableColors.includes(color) ? "" : "opacity-50 cursor-not-allowed"}`}
  title={color}
  style={{ backgroundColor: colorHexMap[color] || "#808080" }} // Default to gray if not found
  onClick={() => availableColors.includes(color) && handleColorSelect(color)}
></div>

//             <div
//   key={index}
//   className={`w-6 h-6 hover:scale-105 rounded-md cursor-pointer border 
//     ${selectedColor === color ? "border-black border-2" : "border-gray-300"}
//     ${availableColors.includes(color) ? "" : "opacity-50 cursor-not-allowed"}`}
//   title={color}
//   style={{ backgroundColor: color.toLowerCase().replace(/\s+/g, "") }}
//   onClick={() => availableColors.includes(color) && handleColorSelect(color)}
// ></div>
            
            ))}
          </div>

          {/* Size Options */}
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">Size:</span>
            {uniqueSizes.map((size, index) => (
              <div
                key={index}
                className={`border rounded-md px-3 py-1 cursor-pointer ${
                  selectedSize === size ? "bg-gray-300" : "hover:bg-gray-300"
                } ${availableSizes.includes(size) ? "" : "opacity-50 cursor-not-allowed"}`}
                onClick={() => availableSizes.includes(size) && handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-black flex-1 text-white px-6 py-2 rounded-md hover:bg-gray-900" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className="text-black border rounded-md p-2 hover:bg-gray-300">
              <CiHeart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
