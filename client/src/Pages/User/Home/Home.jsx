import React from "react";
import Banner from "./Banner";
import Navbar from "../../../Components/User/Navbar/Navbar";
import Footer from "../../../Components/User/Footer/Footer";
import ShopByCategories from "./ShopByCategories";
import DealOfTheMonth from "./DealOfTheMonth";
import Reviews from "./Reviews";
import PayAdCard from "../../../Components/User/Home/PayAdCard";
import InstaStories from "../../../Components/User/Home/InstaStories";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategories />
      <DealOfTheMonth />
      <Reviews />
      <InstaStories />
      <PayAdCard />
    </div>
  );
};

export default Home;
