

import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import OrderProducts from "../../../Components/User/Order/OrderProducts";
import image from "../../../assets/Bags.png";
import AddressCard from "../../../Components/User/Address/AddressCard";
import { useSelector } from "react-redux";
import { CheckoutApiCall } from "../../../ApiCall/OrderApiCalls";
import toast from "react-hot-toast";

const OrderSummary = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [error, setError] = useState("");

  const subtotal = 100; // Example value
  const deliveryCharge = 10; // Example value
  const grandTotal = subtotal - discountAmount + deliveryCharge;

  const navigate = useNavigate();

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10);
      setError("");
    } else {
      setDiscountAmount(0);
      setError("Invalid discount code");
    }
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI",
      quantity: 2,
      price: 25.99,
      imageUrl: image,
      Size: "S",
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      description: "RGB mechanical keyboard with blue switches",
      quantity: 1,
      price: 79.99,
      imageUrl: image,
      Size: "L",
    },
  ]);
  const incrementQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const { address, paymentMethod, orderItems, totalPrice } = useSelector(
    (state) => state.order
  );
  const { cart } = useSelector((state) => state.cart);
  console.log(
    "address,paymentMethod,orderItems,totalPrice",
    address,
    paymentMethod,
    orderItems,
    totalPrice
  );

  const PlaceOrder = async () => {
    try {
      if (!address || !paymentMethod || orderItems.length === 0) {
        toast.error("Please complete all order details before placing the order.");
        return;
      }
  
      const orderData = {
        cartId : cart,
        items: orderItems,
        totalPrice,
        shippingAddress: address, 
        paymentMethod,
      };
      
  
      const response = await CheckoutApiCall(orderData);
  
      if (response) {
        toast.success("Order placed successfully!");
        navigate("/order-success"); // Navigate to order success page
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className="flex flex-col md:flex-row gap-20 justify-center w-full">
        <div className="md:w-3/5">
          <div className="flex items-center justify-between w-full px-5 mb-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <IoHomeOutline />
            </div>
            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <MdOutlinePayment />
            </div>
            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <MdOutlineRateReview />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Confirm Your Order</h2>
            <OrderProducts
              products={orderItems}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              deleteProduct={deleteProduct}
            />
          </div>
          <div className="mt-5">
            <h2>Shipping Address</h2>
            {address && (
              <AddressCard
                key={address.id}
                address={address}
                // isSelected={selectedAddressId === address.id}
                // onSelect={handleSelectAddress}
                // onDelete={handleDeleteAddress}
              />
            )}
          </div>
          <div className="mt-5 flex gap-2">
            <h2>Payment Method : </h2>
            <p className="font-medium">{paymentMethod}</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-5 h-fit border flex flex-col justify-center p-5 px-10 rounded-lg">
          {/* Subtotal */}
          <div className="font-medium flex border-b py-3 justify-between mb-3">
            <h2>Subtotal</h2>
            <p>${totalPrice}</p>
          </div>

          {/* Discount Section */}
          <div className="mb-4 flex flex-col justify-center">
            <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
            <div className="flex items-center border bg-white justify-center rounded-lg">
              <input
                type="text"
                className="outline-none border-0 rounded-lg flex-1 px-2 py-2"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className="h-full px-5 py-2 border-black border bg-black text-white rounded-r-lg"
                onClick={applyDiscount}
              >
                Apply
              </button>
            </div>
            {discountAmount > 0 && (
              <p className="text-green-500 mt-2">
                Discount Applied: -${discountAmount.toFixed(2)}
              </p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {/* Delivery Charge */}
          <div className="font-medium flex justify-between mb-3">
            <h2>Delivery Charge</h2>
            <p>${deliveryCharge.toFixed(2)}</p>
          </div>

          {/* Grand Total */}
          <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
            <h2>Grand Total</h2>
            <p>${grandTotal.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="w-full flex items-center justify-center">
            <button
            onClick={PlaceOrder}
              // onClick={() => navigate("/shipping-address")}
              className="px-10 py-3 bg-black text-white rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
