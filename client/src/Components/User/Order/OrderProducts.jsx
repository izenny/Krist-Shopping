// import React, { useState } from "react";
// import image from "../../../assets/Bags.png";
// import { MdDeleteOutline } from "react-icons/md";
// const OrderProducts = ({
//   products,
//   incrementQuantity,
//   decrementQuantity,
//   deleteProduct,
// }) => {
//   return (
//     <div className="py-5 w-full">
//       <div className="grid grid-cols-[5fr,2fr,2fr,2fr,1fr] w-full items-center border-b pb-3 mb-3">
//         <h2 className="font-medium ml-4">Product</h2>
//         <h2 className="font-medium ml-4">Price</h2>
//         <h2 className="font-medium ml-4">Quantity</h2>
//         <h2 className="font-medium ml-4 ">Sub Total</h2>
//       </div>
//       {products?.map((product) => (
//         <div
//           key={product?.product}
//           className="w-full grid grid-cols-[5fr,2fr,2fr,2fr,2fr]  items-center mb-4 border-b py-3"
//         >
//           <div className="flex items-center">
//             <div className="w-28 h-28">
//               <img
//                 src={product?.image}
//                 alt={product?.name}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="ml-2 flex-1">
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-sm text-gray-500">Color: {product?.color}</p>

//               <p className="text-sm text-gray-500">Size: {product?.size}</p>
//             </div>
//           </div>
//           <div className=" ml-4 w-20">
//             <p className="text-md font-medium">${product?.price}</p>
//           </div>
//           <div className="ml-4 flex items-center">
//             <button
//               className="border px-2 py-1"
//               onClick={() => decrementQuantity(product?.product)}
//               aria-label="Decrease Quantity"
//             >
//               -
//             </button>
//             <span className="mx-2">{product?.quantity}</span>
//             <button
//               className="border px-2 py-1"
//               onClick={() => incrementQuantity(product?.product)}
//               aria-label="Increase Quantity"
//             >
//               +
//             </button>
//           </div>
//           <div className="ml-4 w- text-center">
//             <p className="text-md font-medium">
//               ${product?.total}
//             </p>
//           </div>
//           <div className="ml-4 flex items-center justify-center">
//             <button
//               className="text-red-500 hover:underline"
//               onClick={() => deleteProduct(product?.product)}
//               aria-label="Delete Product"
//             >
//               <MdDeleteOutline />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrderProducts;

import React, { useState } from "react";
import image from "../../../assets/Bags.png";
import { MdDeleteOutline } from "react-icons/md";
const OrderProducts = ({
  products,
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
}) => {
  return (
    <div className="py-5 w-full">
      <div className="hidden md:grid grid-cols-[5fr,2fr,2fr,2fr,1fr] w-full items-center border-b pb-3 mb-3">
        <h2 className="font-medium ml-4">Product</h2>
        <h2 className="font-medium ml-4">Price</h2>
        <h2 className="font-medium ml-4">Quantity</h2>
        <h2 className="font-medium ml-4">Sub Total</h2>
      </div>
      {products?.map((product) => (
        <div
          key={product?.product}
          className="w-full grid md:grid-cols-[5fr,2fr,2fr,2fr,1fr] grid-cols-1 items-center mb-4 border-b py-3 gap-3 md:gap-0"
        >
          <div className="flex items-center">
            <div className="w-16 h-16 md:w-28 md:h-28">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="ml-2 flex-1">
              <h2 className="text-md md:text-lg font-semibold">
                {product.name}
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                Color: {product?.color}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Size: {product?.size}
              </p>
            </div>
          </div>
          <div className="ml-4 w-20 hidden md:block">
            <p className="text-md font-medium">${product?.price}</p>
          </div>
          <div className="ml-4 flex items-center">
            <button
              className="border px-2 py-1"
              onClick={() => decrementQuantity(product?.product)}
              aria-label="Decrease Quantity"
            >
              -
            </button>
            <span className="mx-2">{product?.quantity}</span>
            <button
              className="border px-2 py-1"
              onClick={() => incrementQuantity(product?.product)}
              aria-label="Increase Quantity"
            >
              +
            </button>
          </div>
          <div className="ml-4 w-20 hidden md:block">
            <p className="text-md font-medium">${product?.total}</p>
          </div>
          <div className="ml-4 flex items-center justify-center">
            <button
              className="text-red-500 hover:underline"
              onClick={() => deleteProduct(product?.product)}
              aria-label="Delete Product"
            >
              <MdDeleteOutline />
            </button>
          </div>
          <div className="md:hidden text-sm font-medium text-gray-600 flex justify-between px-2">
            <p>Price: ${product?.price}</p>
            <p>Subtotal: ${product?.total}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderProducts;
