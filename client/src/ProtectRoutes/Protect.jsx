// import React from "react";
// import { use } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

// const Protect = () => {
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
//   console.log(user, isAuthenticated);
//   const path = useLocation().pathname;
//   const navigate = useNavigate();
//   // if (user && isAuthenticated) {
//   //   return <Outlet />;
//   // }
//   if (user && !user.isVerified) {
//     return <Navigate to="/otp" />;
//   }
//   if (user && isAuthenticated && user.isVerified && path === "/login") {
//     return <Navigate to="/" /> || navigate(-1);
//   }
//   return <Outlet />;
// };

// export default Protect;

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
