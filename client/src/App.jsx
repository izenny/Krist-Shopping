// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Importing Components
// import Home from "./Pages/User/Home/Home";
// import Login from "./Account/Login";
// import Signup from "./Account/Register";
// import ForgotPassword from "./Account/ForgotPassword";
// import OTPVerification from "./Account/Otp";
// import ProductListing from "./Pages/User/Product/ProductListing";
// import ProductDetails from "./Pages/User/Product/ProductDetails";
// import Checkout from "./Pages/User/Order/Checkout";
// import ShippingAddress from "./Pages/User/Address/ShippingAddress";
// import Payment from "./Pages/User/Payments/Payment";
// import OrderSummary from "./Pages/User/Order/OrderSummery"
// import MyOrders from "./Pages/User/Order/MyOrders";
// import MyProfile from "./Pages/User/Profile/MyProfile";
// import MyWishlist from "./Pages/User/WhishList/MyWhishlist";
// import ManageAddress from "./Pages/User/Address/ManageAddress";
// import Cards from "./Pages/User/Payments/PaymentCards";
// import Notifications from "./Pages/User/Notifications/Notifications";
// import Settings from "./Pages/User/Settings/Settings";
// // import NotFound from "./Pages/NotFound";

// const App = () => {
//   return (
//     <div className="w-full h-screen">
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/otp" element={<OTPVerification />} />
//       <Route path="/product-listing" element={<ProductListing />} />
//       <Route path="/product-details/:id" element={<ProductDetails />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/shipping-address" element={<ShippingAddress />} />
//       <Route path="/payment" element={<Payment />} />
//       <Route path="/order-summary" element={<OrderSummary />} />
//       <Route path="/my-orders" element={<MyOrders />} />
//       <Route path="/my-profile" element={<MyProfile />} />
//       <Route path="/my-wishlist" element={<MyWishlist />} />
//       <Route path="/manage-address" element={<ManageAddress />} />
//       <Route path="/cards" element={<Cards />} />
//       <Route path="/notifications" element={<Notifications />} />
//       <Route path="/settings" element={<Settings />} />
//       {/* <Route path="*" element={<NotFound />} /> */}

//     </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./Pages/User/Home/Home";
import Login from "./Account/Login";
import Signup from "./Account/Register";
import ForgotPassword from "./Account/ForgotPassword";
import OTPVerification from "./Account/Otp";
import ProductListing from "./Pages/User/Product/ProductListing";
import ProductDetails from "./Pages/User/Product/ProductDetails";
import Checkout from "./Pages/User/Order/Checkout";
import ShippingAddress from "./Pages/User/Address/ShippingAddress";
import Payment from "./Pages/User/Payments/Payment";
import OrderSummary from "./Pages/User/Order/OrderSummery";
import MyOrders from "./Pages/User/Order/MyOrders";
import MyProfile from "./Pages/User/Profile/MyProfile";
import MyWishlist from "./Pages/User/WhishList/MyWhishlist";
import ManageAddress from "./Pages/User/Address/ManageAddress";
import Cards from "./Pages/User/Payments/PaymentCards";
import Notifications from "./Pages/User/Notifications/Notifications";
import Settings from "./Pages/User/Settings/Settings";
import Navbar from "./Components/User/Navbar/Navbar";
// import NotFound from "./Pages/NotFound";

const App = () => {
  const isAuthenticated = true;
  const userRole = "user";
  return (
    <div className="w-full h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPVerification />} />
        {/* PrivateRoutes  */}
        
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shipping-address" element={<ShippingAddress />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
        <Route path="/manage-address" element={<ManageAddress />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
