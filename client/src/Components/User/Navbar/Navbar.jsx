
// import React, { useState, useEffect, useRef } from "react";
// import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import Logo from "../../../assets/Logo.png";
// import CategoryBox from "./CategoryBox";
// import MiniCart from "../Cart/MiniCart";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "../../../Redux/AuthSlice";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [showCategory, setShowCategory] = useState(false);
//   const [showMiniCart, setShowMiniCart] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const toggleShowCategory = () => setShowCategory(!showCategory);
//   const toggleShowMiniCart = () => setShowMiniCart(!showMiniCart);

//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const categoryRef = useRef(null);
//   const miniCartRef = useRef(null);

//   // Handle click outside to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         categoryRef.current &&
//         !categoryRef.current.contains(event.target) &&
//         showCategory
//       ) {
//         setShowCategory(false);
//       }
//       if (
//         miniCartRef.current &&
//         !miniCartRef.current.contains(event.target) &&
//         showMiniCart
//       ) {
//         setShowMiniCart(true);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showCategory, showMiniCart]);

//   return (
//     <div className="w-full bg-white text-black shadow">
//       <div className="container mx-auto flex justify-between md:justify-around items-center py-4 px-6 md:px-0 lg:px-6">
//         {/* Logo */}
//         <div className="w-20">
//           <img src={Logo} alt="Brand Logo" />
//         </div>

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex">
//           <ul className="flex space-x-8">
//             <li
//               onClick={() => navigate("/")}
//               className="cursor-pointer hover:scale-105 transition-transform font-serif"
//             >
//               Home
//             </li>
//             <li
//               onClick={toggleShowCategory}
//               className="relative cursor-pointer hover:scale-105 transition-transform font-serif"
//             >
//               Shop
//             </li>
//             {showCategory && (
//               <div
//                 ref={categoryRef}
//                 className="absolute z-30 bg-gray-50 rounded-lg shadow-lg top-20 left-10 md:w-3/4"
//               >
//                 <CategoryBox onClose={() => setShowCategory(false)} />
//               </div>
//             )}
//             <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
//               Our Story
//             </li>
//             <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
//               Blog
//             </li>
//             <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
//               Contact Us
//             </li>
//           </ul>
//         </div>

//         {/* Icons and Login (Desktop) */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div
//             className="p-2 border rounded-lg text-xl transition-transform cursor-pointer"
//             aria-label="Search"
//           >
//             <CiSearch />
//           </div>
//           <div
//             className="p-2 border rounded-lg text-xl transition-transform cursor-pointer"
//             aria-label="Favorites"
//           >
//             <CiHeart />
//           </div>
//           <div
//             ref={miniCartRef}
//             onClick={toggleShowMiniCart}
//             className="relative p-2 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
//             aria-label="Shopping Bag"
//           >
//             <LiaShoppingBagSolid />
            
//           </div>
//           {showMiniCart && (
//             <div className="absolute  z-20 bg-white border rounded-lg shadow-lg p-4 md:w-2/5 lg:w-2/4 top-16   md:right-36">
//               <h3 className="font-semibold mb-2">Your Cart</h3>
//               <MiniCart />
//             </div>
//           )}
//           {isAuthenticated && (
//             <Link to="my-profile">
//               <div className="border flex gap-2 justify-center items-center p-2 rounded-lg text-xl cursor-pointer">
//                 <CiUser />{" "}
//                 <h2 className="text-base capitalize">{user?.username}</h2>
//               </div>
//             </Link>
//           )}
//           {!isAuthenticated ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
//             >
//               Login
//             </button>
//           ) : (
//             <button
//               onClick={() => dispatch(logoutUser())}
//               className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             aria-label="Toggle Mobile Menu"
//             className="text-2xl"
//           >
//             <IoReorderThreeOutline />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="bg-white shadow-lg md:hidden">
//           <ul className="flex flex-col space-y-2 p-4">
//             <li
//               onClick={() => navigate("/")}
//               className="cursor-pointer hover:text-gray-500"
//             >
//               Home
//             </li>
//             <li
//               onClick={toggleShowCategory}
//               className="cursor-pointer hover:text-gray-500"
//             >
//               Shop
//               {showCategory && (
//                 <div className="top-20 left-10 md:w-3/4">
//                   <CategoryBox />
//                 </div>
//               )}
//             </li>
//             <li className="cursor-pointer hover:text-gray-500">Our Story</li>
//             <li className="cursor-pointer hover:text-gray-500">Blog</li>
//             <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
//             <div className="flex flex-col space-y-2 mt-4">
//               <div
//                 className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
//                 aria-label="Search"
//               >
//                 <CiSearch />
//               </div>
//               <div
//                 className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
//                 aria-label="Favorites"
//               >
//                 <CiHeart />
//               </div>
//               <div
//                 onClick={toggleShowMiniCart}
//                 className="relative p-2 w-10 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
//                 aria-label="Shopping Bag"
//               >
//                 <LiaShoppingBagSolid />
//                 {showMiniCart && <MiniCart />}
//               </div>
//             </div>
//             {!isAuthenticated ? (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
//               >
//                 Login
//               </button>
//             ) : (
//               <Link to="/my-profile">
//                 <div className="border w-fit flex gap-2 justify-center items-center p-2 rounded-lg text-xl cursor-pointer">
//                   <CiUser />{" "}
//                   <h2 className="text-base capitalize">{user?.username}</h2>
//                 </div>
//               </Link>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo.png";
import CategoryBox from "./CategoryBox";
import MiniCart from "../Cart/MiniCart";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Redux/AuthSlice";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleShowCategory = () => setShowCategory(!showCategory);
  // const toggleShowMiniCart = () => setShowMiniCart(!showMiniCart);
  const toggleShowMiniCart = () => {
    if (window.innerWidth < 768) {
      navigate("/checkout");
    } else {
      setShowMiniCart(!showMiniCart);
    }
  };

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryRef = useRef(null);
  const miniCartRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target) &&
        showCategory
      ) {
        setShowCategory(false);
      }
      if (
        miniCartRef.current &&
        !miniCartRef.current.contains(event.target) &&
        showMiniCart
      ) {
        setShowMiniCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategory, showMiniCart]);

  return (
    <div className="w-full bg-white text-black shadow">
      <div className="container mx-auto flex justify-between md:justify-around items-center py-4 px-6 md:px-0 lg:px-6">
        {/* Logo */}
        <div className="w-20">
          <img src={Logo} alt="Brand Logo" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:scale-105 transition-transform font-serif"
            >
              Home
            </li>
            <li
              onClick={toggleShowCategory}
              className="relative cursor-pointer hover:scale-105 transition-transform font-serif"
            >
              Shop
            </li>
            {showCategory && (
              <div
                ref={categoryRef}
                className="absolute z-30 bg-gray-50 rounded-lg shadow-lg top-20 left-10 md:w-3/4"
              >
                <CategoryBox onClose={() => setShowCategory(false)} />
              </div>
            )}
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Our Story
            </li>
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Blog
            </li>
            <li className="cursor-pointer hover:scale-105 transition-transform font-serif">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Icons and Login (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="p-2 border rounded-lg text-xl transition-transform cursor-pointer"
            aria-label="Search"
          >
            <CiSearch />
          </div>
          <div
            className="p-2 border rounded-lg text-xl transition-transform cursor-pointer"
            aria-label="Favorites"
          >
            <CiHeart />
          </div>
          <div
            ref={miniCartRef}
            onClick={toggleShowMiniCart}
            className="relative p-2 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
            aria-label="Shopping Bag"
          >
            <LiaShoppingBagSolid />
          </div>
          {showMiniCart && (
            <div
              ref={miniCartRef}
              className="absolute z-20 bg-white border rounded-lg shadow-lg p-4 md:w-2/5 lg:w-2/4 top-16 md:right-36"
            >
              <h3 className="font-semibold mb-2">Your Cart</h3>
              <MiniCart onClose={() => setShowMiniCart(false)} />
            </div>
          )}
          {isAuthenticated && (
            <Link to="my-profile">
              <div className="border flex gap-2 justify-center items-center p-2 rounded-lg text-xl cursor-pointer">
                <CiUser /> <h2 className="text-base capitalize">{user?.username}</h2>
              </div>
            </Link>
          )}
          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => dispatch(logoutUser())}
              className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
            >
              Logout
            </button>
          )}
        </div>
         {/* Mobile Menu Icon */}
         <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            className="text-2xl"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-gray-500"
            >
              Home
            </li>
            <li
              onClick={toggleShowCategory}
              className="cursor-pointer hover:text-gray-500"
            >
              Shop
              {showCategory && (
                <div className="top-20 left-10 md:w-3/4">
                  <CategoryBox />
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-gray-500">Our Story</li>
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
            <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
            <div className="flex flex-col space-y-2 mt-4">
              <div
                className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
                aria-label="Search"
              >
                <CiSearch />
              </div>
              <div
                className="p-2 border w-10 rounded-lg text-xl cursor-pointer"
                aria-label="Favorites"
              >
                <CiHeart />
              </div>
              <div
                onClick={toggleShowMiniCart}
                className="relative p-2 w-10 border rounded-lg text-xl hover:scale-105 transition-transform cursor-pointer"
                aria-label="Shopping Bag"
              >
                <LiaShoppingBagSolid />
                {showMiniCart && <MiniCart />}
              </div>
            </div>
            {isAuthenticated && (
            <Link to="my-profile">
              <div className="border flex gap-2 justify-center items-center p-2 rounded-lg text-xl cursor-pointer">
                <CiUser /> <h2 className="text-base capitalize">{user?.username}</h2>
              </div>
            </Link>
          )}
          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => dispatch(logoutUser())}
              className="bg-black p-2 w-20 rounded-lg hover:scale-105 transition-transform text-white"
            >
              Logout
            </button>
          )}
          </ul>
     
      </div>)}
      </div>
   
  );
};

export default Navbar;
