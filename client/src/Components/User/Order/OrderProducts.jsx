// import React, { useState } from "react";
// import image from "../../../assets/Bags.png";
// import { MdDeleteOutline } from "react-icons/md";
// const OrderProducts = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Wireless Mouse",
//       description: "Ergonomic wireless mouse with adjustable DPI",
//       quantity: 2,
//       price: 25.99,
//       imageUrl: image,
//       Size: "s",
//     },
//     {
//       id: 2,
//       name: "Gaming Keyboard",
//       description: "RGB mechanical keyboard with blue switches",
//       quantity: 1,
//       price: 79.99,
//       imageUrl: image,
//       Size: "L",
//     },
//     {
//       id: 3,
//       name: "Water Bottle",
//       description: "Stainless steel insulated water bottle, 1 liter",
//       quantity: 3,
//       price: 19.95,
//       imageUrl: image,
//       Size: "XL",
//     },
//     {
//       id: 4,
//       name: "Water Bottle",
//       description: "Stainless steel insulated water bottle, 1 liter",
//       quantity: 3,
//       price: 19.95,
//       imageUrl: image,
//       Size: "XL",
//     },
//     {
//       id: 5,
//       name: "Water Bottle",
//       description: "Stainless steel insulated water bottle, 1 liter",
//       quantity: 3,
//       price: 19.95,
//       imageUrl: image,
//       Size: "XL",
//     },
//   ]);

//   // Handle quantity increment
//   const incrementQuantity = (id) => {
//     setProducts((prev) =>
//       prev.map((product) =>
//         product.id === id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       )
//     );
//   };

//   // Handle quantity decrement
//   const decrementQuantity = (id) => {
//     setProducts((prev) =>
//       prev.map((product) =>
//         product.id === id && product.quantity > 1
//           ? { ...product, quantity: product.quantity - 1 }
//           : product
//       )
//     );
//   };

//   // Handle product deletion
//   const deleteProduct = (id) => {
//     setProducts((prev) => prev.filter((product) => product.id !== id));
//   };

//   return (
//     <div className="py-5">
//       <div className="grid grid-cols-[4fr,2fr,2fr,1fr,1fr] items-center border-b pb-3 mb-3">
//         <h2 className=" font-medium">Product</h2>
//         <h2 className=" font-medium">Price</h2>
//         <h2 className=" font-medium">Quantity</h2>
//         <h2 className=" font-medium">Total</h2>
//       </div>
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="w-full grid grid-cols-[4fr,2fr,2fr,1fr,1fr] items-center mb-4 border-b py-3"
//         >
//           <div className="flex items-center">
//             <div className="w-28 h-28">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="ml-4 flex-1">
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-sm text-gray-500">Size : {product.Size}</p>
//             </div>
//           </div>
//           <div className="text-center w-20">
//             <p className="text-md font-medium">${product.price.toFixed(2)}</p>
//           </div>
//           <div className="ml-4 flex items-center">
//             <button
//               className="border px-2 py-1"
//               onClick={() => decrementQuantity(product.id)}
//             >
//               -
//             </button>
//             <span className="mx-2">{product.quantity}</span>
//             <button
//               className="border px-2 py-1"
//               onClick={() => incrementQuantity(product.id)}
//             >
//               +
//             </button>
//           </div>
//           <div className="ml-4 w-20 text-center">
//             <p className="text-md font-medium">
//               ${(product.quantity * product.price).toFixed(2)}
//             </p>
//           </div>
//           <div className="ml-4">
//             <button
//               className="text-red-500 hover:underline"
//               onClick={() => deleteProduct(product.id)}
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
const OrderProducts = ({ products, incrementQuantity, decrementQuantity, deleteProduct }) => {
    return (
      <div className="py-5">
        <div className="grid grid-cols-[4fr,2fr,2fr,1fr,1fr] items-center border-b pb-3 mb-3">
          <h2 className="font-medium">Product</h2>
          <h2 className="font-medium">Price</h2>
          <h2 className="font-medium">Quantity</h2>
          <h2 className="font-medium">Sub Total</h2>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full grid grid-cols-[4fr,2fr,2fr,1fr,1fr] items-center mb-4 border-b py-3"
          >
            <div className="flex items-center">
              <div className="w-28 h-28">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">Size: {product.Size}</p>
              </div>
            </div>
            <div className="text-center w-20">
              <p className="text-md font-medium">${product.price.toFixed(2)}</p>
            </div>
            <div className="ml-4 flex items-center">
              <button
                className="border px-2 py-1"
                onClick={() => decrementQuantity(product.id)}
                aria-label="Decrease Quantity"
              >
                -
              </button>
              <span className="mx-2">{product.quantity}</span>
              <button
                className="border px-2 py-1"
                onClick={() => incrementQuantity(product.id)}
                aria-label="Increase Quantity"
              >
                +
              </button>
            </div>
            <div className="ml-4 w-20 text-center">
              <p className="text-md font-medium">
                ${(product.quantity * product.price).toFixed(2)}
              </p>
            </div>
            <div className="ml-4">
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteProduct(product.id)}
                aria-label="Delete Product"
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default OrderProducts;
