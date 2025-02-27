
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import Navbar from "./Components/User/Navbar/Navbar";
import Profile from "./Pages/User/Profile/Profile";
import MyWhishlist from "./Pages/User/WhishList/MyWhishlist";
import ManageAddress from "./Pages/User/Address/ManageAddress";
import PaymentCards from "./Pages/User/Payments/PaymentCards";
import Notifications from "./Pages/User/Notifications/Notifications";
import Settings from "./Pages/User/Settings/Settings";
import PublicLayout from "./ProtectRoutes/PublicLayout";
import { useDispatch, useSelector } from "react-redux";
import { authCheck } from "./Redux/AuthSlice";
import { Toaster } from "react-hot-toast";
import Protect from "./ProtectRoutes/Protect";
import { fetchCart } from "./Redux/CartSlice";

const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated ) {
      dispatch(fetchCart());
    }
  }, [isAuthenticated]);

  return (
    <div className="w-full h-screen ">
      <Routes>
        <Route element={<Protect />}>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTPVerification />} />
          {/* user Routes  with layout*/}

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="product-listing" element={<ProductListing />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="shipping-address" element={<ShippingAddress />} />
            <Route path="payment" element={<Payment />} />
            <Route path="order-summary" element={<OrderSummary />} />
            <Route element={<MyProfile />}>
              {/* <Route index path="my-profile" element={<Profile />} /> */}
              <Route index path="my-profile" element={<Profile />} />
              <Route path="orders" element={<MyOrders />} />
              <Route path="wishlists" element={<MyWhishlist />} />
              <Route path="addresses" element={<ManageAddress />} />
              <Route path="cards" element={<PaymentCards />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Route>
        {/* Catch-All Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;


