import React from "react";
import Navbar from "../Components/User/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/User/Footer/Footer";

const PublicLayout = () => {
  return (
    <div className="">
      <div className="h-full w-full">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
