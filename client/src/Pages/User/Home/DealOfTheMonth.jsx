
import React, { useState, useEffect } from "react";
import homemodel from "../../../assets/homemodel.png";
// import DealOfTheDay from '../../../assets/DealOfTheDay.png'
import DealOfTheDay from '../../../assets/download4.jpg'
import { LuCircleFadingArrowUp } from "react-icons/lu";
import { RiArrowRightUpBoxLine, RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const DealOfTheMonth = () => {
  // Set the initial timer duration (e.g., 2 days in seconds)
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60); // 2 days
  const nagivigate = useNavigate()
  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0; // Stop at 0
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Function to format seconds into days, hours, minutes, and seconds
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="flex flex-col md:flex-row bg-[#F8F2EC] min-h-52  w-full">
      {/* Text Content */}
      <div className="flex flex-col items-center justify-center md:w-1/2 p-5 md:p-10">
        <div className="space-y-5  text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold">Deals of the Month</h2>
          <p className="text-sm md:text-base text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            sapiente quas saepe iusto minima! Repellat accusamus animi dolorum,
            iusto cupiditate officiis deserunt esse, repudiandae, assumenda
            dolorem optio dicta illo at!
          </p>
          {/* Timer */}
          <div className="flex text-center justify-center md:justify-start space-x-4 ">
            <div className="border-gray-300 border-2 p-2 w-16">
              <p className="text-xl font-semibold">{days}</p>
              <p className="text-sm">Day{days !== 1 ? "s" : ""}</p>
            </div>
            <div className="border-gray-300 border-2 p-2 w-16">
              <p className="text-xl font-semibold">{hours}</p>
              <p className="text-sm">Hr{hours !== 1 ? "s" : ""}</p>
            </div>
            <div className="border-gray-300 border-2 p-2 w-16">
              <p className="text-xl font-semibold">{minutes}</p>
              <p className="text-sm">Min{minutes !== 1 ? "s" : ""}</p>
            </div>
            <div className="border-gray-300 border-2 p-2 w-16">
              <p className="text-xl font-semibold">{secs}</p>
              <p className="text-sm">Sec{secs !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <button onClick={()=>nagivigate('/product-listing')} className="bg-black flex justify-center items-center gap-2 text-white p-3 rounded-md text-sm px-6 hover:bg-gray-800">
            View All Products <RiArrowRightUpLine/>
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] ">
        <img
          src={DealOfTheDay}
          alt="Home model showcasing the deal of the month"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default DealOfTheMonth;
