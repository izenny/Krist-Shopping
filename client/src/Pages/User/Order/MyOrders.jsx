

import React, { useEffect, useState } from "react";
import { viewOrderApi } from "../../../ApiCall/OrderApiCalls";

const MyOrders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await viewOrderApi();
        setOrderData(response?.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className=" w-full overflow-y-auto max-h-[500px]">
      {orderData.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orderData.map((order) => (
          <div key={order._id} className="mb-6">
            {order.items.map((item, index) => (
              <div key={`${order._id}-${index}`}>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex items-center justify-center  overflow-hidden">
                      <img
                        src={item.image || "https://via.placeholder.com/100"}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2>{item.name}</h2>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div>
                    <h2>${item.price}</h2>
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
                    className={`px-3 py-1 rounded-md ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    } font-medium`}
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
        ))
      )}
    </div>
  );
};

export default MyOrders;

