
import React from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Product = ({ products, loading }) => {
  const navigate = useNavigate();
// loading = true
  return (
    <div className="p-5 w-full overflow-x-auto flex flex-wrap rounded-lg shadow-sm gap-5 ">
      {loading ? (
        // Show 5 skeleton loaders
        Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-52 space-y-2">
            <div className="relative rounded-lg w-52 h-64 bg-gray-200 animate-pulse"></div>
            <div className="space-y-2 pl-1">
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-full animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))
      ) : products?.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="w-52">
            <div className="relative rounded-lg w-52 h-64 bg-slate-50 overflow-hidden group">
              <img
                src={product.images[0].url}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

              {/* Icons shown on hover */}
              <div className="absolute top-3 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CiHeart className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
                <AiOutlineEye
                  onClick={() => navigate(`/product-details/${product._id}`)}
                  className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300"
                />
                <LiaCartPlusSolid className="text-black bg-white bg-opacity-80 p-1 rounded-full text-3xl cursor-pointer hover:bg-opacity-100 hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Button shown on hover */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white w-[80%] px-4 py-2 rounded-md text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div onClick={() => navigate(`/product-details/${product._id}`)} className="space-y-0.5 pl-1 cursor-pointer">
              <h2 className="font-medium">{product.name}</h2>
              <p className="text-sm line-clamp-2">{product.description}</p>
              <p className="text-sm">
                ${product.price}{" "}
                <span className="line-through text-slate-600 pl-2">
                  ${product.oldPrice}
                </span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Product;
