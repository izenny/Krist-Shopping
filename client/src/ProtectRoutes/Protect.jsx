
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const Protect = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  // const navigate = useNavigate();
  const path = location.pathname;

  // Redirect logged-in users away from login & register pages
  if (
    user &&
    isAuthenticated &&
    user?.isVerified &&
    (path === "/login" || path === "/signup")
  ) {
    return <Navigate to="/" replace />;
  } else if (user && !user.isVerified && path !== "/otp") {
    return <Navigate to="/otp" replace />;
  } else if (user && user?.isVerified && path === "/otp") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default Protect;
