// import React from "react";

// const CategoryBox = () => {
//   return (
//     <div className=" md:w-full  p-5 grid grid-cols-1 md:grid-cols-4  ">
//       <div className="md:border-r-2 space-y-2 pl-10">
//         {/* men  */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Men</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">T-Shirts</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Casual Shirts</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Formal Shirts</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Jackets</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Blazers & Coats</li>
//           </ul>
//         </div>
//         {/* indian and festive wear */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Indian & Festive Wear</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Kurtas & Kurta Sets</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Sherwanis</li>
//           </ul>
//         </div>
//       </div>
//       <div className="md:border-r-2 space-y-2 pl-10">
//         {/* women */}
//         <div className="space-y-2">
//             <h2 className="font-medium text-lg">Women</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Kurtas & Suits</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Sarees</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Ethnic Wear</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Lehenga Cholis</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Jackets</li>
//           </ul>
//         </div>
//         {/* western wear  */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Western Wear</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Dresses</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Jumpsuits</li>
//           </ul>
//         </div>
//       </div>
//       <div className="md:border-r-2 space-y-2 pl-10">
//         {/* footwere  */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Footwear</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Flats</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Casual Shoes</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Heels</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Boots</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Sports Shoes & Floaters</li>
//           </ul>
//         </div>
//         {/* product features  */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Product Features</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">360 product Viewer</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Product with Video</li>
//           </ul>
//         </div>
//       </div>
//       <div className="pl-10 space-y-2">
//         {/* kids  */}
//         <div className="space-y-2">
//           <h2 className="font-medium text-lg">Kids</h2>
//           <ul className="pl-2 space-y-3">
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">T-Shirts</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Shirts</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Jeans</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Trousers</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Party Wear</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Innerwear & Thermal</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Track Pants</li>
//             <li className="hover:scale-105 cursor-pointer transition-transform duration-100">Value Pack</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryBox;


import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/product-listing?category=${category}`);
    if (onClose) onClose();
  };

  return (
    <div className="md:w-full p-5 grid grid-cols-1 md:grid-cols-4">
      <div className="md:border-r-2 space-y-2 pl-10">
        {/* Men */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Men</h2>
          <ul className="pl-2 space-y-3">
            {["T-Shirts", "Casual Shirts", "Formal Shirts", "Jackets", "Blazers & Coats"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Indian & Festive Wear */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Indian & Festive Wear</h2>
          <ul className="pl-2 space-y-3">
            {["Kurtas & Kurta Sets", "Sherwanis"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:border-r-2 space-y-2 pl-10">
        {/* Women */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Women</h2>
          <ul className="pl-2 space-y-3">
            {["Kurtas & Suits", "Sarees", "Ethnic Wear", "Lehenga Cholis", "Jackets"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Western Wear */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Western Wear</h2>
          <ul className="pl-2 space-y-3">
            {["Dresses", "Jumpsuits"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:border-r-2 space-y-2 pl-10">
        {/* Footwear */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Footwear</h2>
          <ul className="pl-2 space-y-3">
            {["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes & Floaters"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Features */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Product Features</h2>
          <ul className="pl-2 space-y-3">
            {["360 product Viewer", "Product with Video"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pl-10 space-y-2">
        {/* Kids */}
        <div className="space-y-2">
          <h2 className="font-medium text-lg">Kids</h2>
          <ul className="pl-2 space-y-3">
            {["T-Shirts", "Shirts", "Jeans", "Trousers", "Party Wear", "Innerwear & Thermal", "Track Pants", "Value Pack"].map((item) => (
              <li
                key={item}
                className="hover:scale-105 cursor-pointer transition-transform duration-100"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryBox;
