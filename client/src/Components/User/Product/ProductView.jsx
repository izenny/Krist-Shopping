import React from "react";
import image from "../../../assets/Bags.png";
import { CiHeart } from "react-icons/ci";

const ProductView = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 p-5">
      {/* Image Section */}
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="md:w-3/4 md:h-3/4 bg-gray-100 border rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex md:w-3/4 flex-wrap gap-2 mt-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 border hover:bg-gray-300 cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Data Section */}
      <div className="md:w-1/2 ">
        <div className="md:w-3/4 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Product Name</h2>
          <p className="text-gray-600">
            This is a short description of the product.
          </p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-xl font-semibold">
            $250 <span className="line-through text-slate-600 pl-2">$800</span>
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid magnam neque veritatis itaque laboriosam modi aut vero
            doloribus amet, eveniet, iusto corporis corrupti dolor ducimus,
            deleniti a iste optio!
          </p>

          {/* Color Options */}
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">Color:</span>
            <div className="w-6 h-6 rounded-md bg-red-500 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-md bg-blue-500 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-md bg-green-500 cursor-pointer"></div>
          </div>

          {/* Size Options */}
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium">Size:</span>
            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              XS
            </div>

            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              S
            </div>
            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              M
            </div>
            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              L
            </div>
            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              XL
            </div>
            <div className="border rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
              XXL
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            {/* Quantity */}
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2 hover:bg-gray-300">-</button>
              <div className="px-4">2</div>
              <button className="px-4 py-2 hover:bg-gray-300">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-black flex-1 text-white px-6 py-2 rounded-md hover:bg-gray-900">
              Add to Cart
            </button>

            {/* Wishlist */}
            <button className="text-black border rounded-md p-2 hover:bg-gray-300">
              <CiHeart className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
