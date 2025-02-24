// import React from "react";
// import image from "../../../assets/Post5.jpg";

// const MyOrders = () => {
//   return (
//     <div>
//       <div>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-4">
//             <div className="w-24 h-24 bg-slate-100  overflow-hidden">
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h2>Product name</h2>
//               <p>Size : S </p>
//               <p>Qyt : 1</p>
//             </div>
//           </div>
//           <div>
//             <h2>$80</h2>
//           </div>
//           <div className="space-y-2">
//             <button className="hover:bg-gray-300 w-36   text-black border border-black py-2 justify-center rounded-lg flex  items-center gap-3">
//               View Order
//             </button>
//             <button className="bg-black text-white py-2  justify-center rounded-lg flex w-36 items-center gap-3">
//               Write A Review
//             </button>
//           </div>
//         </div>
//         <div className="flex gap-4 my-4 items-center">
//           <h2 className="px-3 py-1 rounded-md bg-green-100 text-green-700 font-medium">
//             Delivered
//           </h2>
//           <p>your product has been delivered</p>
//         </div>
//       </div>

//       <div>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-4">
//             <div className="w-24 h-24 bg-slate-100  overflow-hidden">
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h2>Product name</h2>
//               <p>Size : S </p>
//               <p>Qyt : 1</p>
//             </div>
//           </div>
//           <div>
//             <h2>$80</h2>
//           </div>
//           <div className="space-y-2">
//             <button className="hover:bg-gray-300 w-36   text-black border border-black py-2 justify-center rounded-lg flex  items-center gap-3">
//               View Order
//             </button>
//             <button className="bg-black text-white py-2  justify-center rounded-lg flex w-36 items-center gap-3">
//               Cancel
//             </button>
//           </div>
//         </div>
//         <div className="flex gap-4 my-4 items-center">
//           <h2 className="px-3 py-1 rounded-md bg-red-100 text-center text-red-700 font-medium">
//             in process
//           </h2>
//           <p>your product has been delivered</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState } from "react";
import image1 from "../../../assets/Post5.jpg"; // Sample image
import image2 from "../../../assets/Post5.jpg"; // Sample image
import { viewOrderApi } from "../../../ApiCall/OrderApiCalls";

const orders = [
  {
    id: 1,
    name: "Product Name 1",
    size: "S",
    quantity: 1,
    price: 80,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-700",
    image: image1,
  },
  {
    id: 2,
    name: "Product Name 2",
    size: "M",
    quantity: 1,
    price: 80,
    status: "In Process",
    statusClass: "bg-red-100 text-red-700",
    image: image2,
  },
];

const MyOrders = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await viewOrderApi();
        setOrderData(response);
      } catch (error) {
        console.log("failed to fetch orders", error);
      }
    };
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <div key={order.id} className="mb-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-slate-100 overflow-hidden">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2>{order.name}</h2>
                <p>Size: {order.size}</p>
                <p>Quantity: {order.quantity}</p>
              </div>
            </div>
            <div>
              <h2>${order.price}</h2>
            </div>
            <div className="space-y-2">
              <button className="hover:bg-gray-300 w-36 text-black border border-black py-2 justify-center rounded-lg flex items-center gap-3">
                View Order
              </button>
              {order.status === "Delivered" ? (
                <button className="bg-black text-white py-2 justify-center rounded-lg flex w-36 items-center gap-3">
                  Write A Review
                </button>
              ) : (
                <button className="bg-black text-white py-2 justify-center rounded-lg flex w-36 items-center gap-3">
                  Cancel
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-4 my-4 items-center">
            <h2
              className={`px-3 py-1 rounded-md ${order.statusClass} font-medium`}
            >
              {order.status}
            </h2>
            <p>
              {order.status === "Delivered"
                ? "Your product has been delivered."
                : "Your product is in process."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
