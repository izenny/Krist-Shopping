

// import React from "react";
// import Western from "../../../assets/Western Wear.png";
// import Ethnic from "../../../assets/Ethnic.png";
// import Casual from "../../../assets/Casual.png";
// import Sports from "../../../assets/Sports.png";
// import Formal from "../../../assets/Formal.png";
// import Party from "../../../assets/Party.png";
// import Winter from "../../../assets/Winter.png";
// import Summer from "../../../assets/Summer.png";
// import Beach from "../../../assets/Beach.png";
// import Foot from "../../../assets/Foot.png";
// import Accessories from "../../../assets/Accessories.png";
// import Kids from "../../../assets/Kids.png";
// // import Mens from "../../../assets/Mens.png";
// // import Womens from "../../../assets/Womens.png";
// // import Lingerie from "../../../assets/Lingerie.png";
// // import Active from "../../../assets/Active.png";
// import Traditional from "../../../assets/Traditional.png";
// // import Denim from "../../../assets/Denim.png";
// // import Outer from "../../../assets/Outer.png";
// // import Swim from "../../../assets/Swim.png";
// import Bags from "../../../assets/Bags.png";
// import Jewelry from "../../../assets/Jewelry.png";
// // import Hoodies from "../../../assets/Hoodies.png";
// // import Suits from "../../../assets/Suits.png";


// const CategoryCard = () => {
//   const categories = [
//     { id: 1, name: "Western Wear", image: Western },
//     { id: 2, name: "Ethnic Wear", image: Ethnic },
//     { id: 3, name: "Casual Wear", image: Casual },
//     { id: 4, name: "Sports Wear", image: Sports },
//     { id: 5, name: "Formal Wear", image: Formal },
//     { id: 6, name: "Party Wear", image: Party },
//     { id: 7, name: "Winter Wear", image: Winter },
//     { id: 8, name: "Summer Wear", image: Summer },
//     { id: 9, name: "Beach Wear", image: Beach },
//     { id: 11, name: "Footwear", image: Foot },
//     { id: 12, name: "Accessories", image: Accessories },
//     { id: 13, name: "Kids Wear", image: Kids },
//   //   { id: 14, name: "Men's Wear", image: Mens },
//   //   { id: 15, name: "Women's Wear", image: Womens },
//   //   { id: 16, name: "Lingerie", image: Lingerie },
//     { id: 18, name: "Traditional Wear", image: Traditional },
//   //   { id: 19, name: "Denim Collection", image: Denim },
//   //   { id: 21, name: "Swimwear", image: Swim },
//     { id: 22, name: "Bags & Purses", image: Bags },
//     { id: 23, name: "Jewelry", image: Jewelry },
//   //   { id: 24, name: "Hoodies & Sweatshirts", image: Hoodies },
//   //   { id: 25, name: "Suits & Blazers", image: Suits },
//   ];
  
 

//   return (
//     <div className="w-full h-full flex flex-wrap justify-center items-center gap-10">
//       {categories.map((category) => (
//         <div key={category.id} className="relative w-60 h-80 rounded-lg">
//           {/* Image */}
//           <div className="absolute inset-0">
//             <img
//               src={category.image}
//               alt={category.name}
//               className="object-scale-down w-full h-full"
//             />
//           </div>

//           {/* Overlay with Opacity */}
//           <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-30 transition duration-300"></div>

//           {/* Button Positioned Slightly Above Bottom */}
//           <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//             <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
//               {category.name}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryCard;



import React from "react";
import Western from "../../../assets/Western Wear.png";
import Ethnic from "../../../assets/Ethnic.png";
import Casual from "../../../assets/Casual.png";
import Sports from "../../../assets/Sports.png";
import Formal from "../../../assets/Formal.png";
import Party from "../../../assets/Party.png";
import Winter from "../../../assets/Winter.png";
import Summer from "../../../assets/Summer.png";
import Beach from "../../../assets/Beach.png";
import Foot from "../../../assets/Foot.png";
import Accessories from "../../../assets/Accessories.png";
import Kids from "../../../assets/Kids.png";
import Traditional from "../../../assets/Traditional.png";
import Bags from "../../../assets/Bags.png";
import Jewelry from "../../../assets/Jewelry.png";

const categories = [
  { id: 1, name: "Western Wear", image: Western },
  { id: 2, name: "Ethnic Wear", image: Ethnic },
  { id: 3, name: "Casual Wear", image: Casual },
  { id: 4, name: "Sports Wear", image: Sports },
  { id: 5, name: "Formal Wear", image: Formal },
  { id: 6, name: "Party Wear", image: Party },
  { id: 7, name: "Winter Wear", image: Winter },
  { id: 8, name: "Summer Wear", image: Summer },
  { id: 9, name: "Beach Wear", image: Beach },
  { id: 11, name: "Footwear", image: Foot },
  { id: 12, name: "Accessories", image: Accessories },
  { id: 13, name: "Kids Wear", image: Kids },
  { id: 18, name: "Traditional Wear", image: Traditional },
  { id: 22, name: "Bags & Purses", image: Bags },
  { id: 23, name: "Jewelry", image: Jewelry },
];

const CategoryCard = ({ currentIndex, categoriesPerPage }) => {
  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + categoriesPerPage
  );

  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-10">
      {visibleCategories.map((category) => (
        <div key={category.id} className="relative w-60 h-80 rounded-lg">
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={category.image}
              alt={category.name}
              className="object-scale-down w-full h-full"
            />
          </div>

          {/* Overlay with Opacity */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-30 transition duration-300"></div>

          {/* Button Positioned Slightly Above Bottom */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
              {category.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

