import React, { useState } from "react";
import OrderProducts from "../../../Components/User/Order/OrderProducts";
import image from "../../../assets/Bags.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { CheckoutApiCall } from "../../../ApiCall/OrderApiCalls";
import { setOrderItems } from "../../../Redux/OrderSlice";
import { deleteCartItem, UpdateCart } from "../../../Redux/CartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, items, subTotal, isLoading } = useSelector(
    (state) => state.cart
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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

  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const deliveryCharge = 100;

  const incrementQuantity = async (product) => {
    try {
      const cartData = {
        product: product.product,
        quantity: product.quantity + 1,
        color: product.color,
        size: product.size,
      };

      await dispatch(UpdateCart(cartData));
    } catch (error) {
      console.log(error);
    }
  };

  const decrementQuantity = async (product) => {
    if (product.quantity > 1) {
      try {
        const cartData = {
          product: product.product,
          quantity: product.quantity - 1,
          color: product.color,
          size: product.size,
        };

        await dispatch(UpdateCart(cartData));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteProduct = async (product) => {
    try {
      const cartData = {
        product: product.product,
        color: product.color,
        size: product.size,
      };
  
      await dispatch(deleteCartItem(cartData));
    } catch (error) {
      console.log(error);
    }
  };
  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10); // Apply a flat discount of $10
    } else {
      alert("Invalid discount code");
      setDiscountAmount(0);
    }
  };

  const grandTotal = Math.max(subTotal - discountAmount + deliveryCharge, 0);

  const proceedToCheckout = async () => {
    try {
      setLoading(true);
      dispatch(setOrderItems({ items, totalPrice: grandTotal }));
      navigate("/shipping-address");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong while checking out");
    }
  };
  return (
    <div className="md:p-10 p-5 w-full ">
      <h2 className="md:text-2xl  font-semibold mb-4">Checkout</h2>

      <div className="flex justify-between flex-col items-center md:flex-row gap-5 ">
        {/* Product Listing */}
        <OrderProducts
          products={items}
          incrementQuantity={(product) => incrementQuantity(product)}
          decrementQuantity={(product) => decrementQuantity(product)}
          deleteProduct={(product) => deleteProduct(product)}
        />

        {/* Summary Section */}
        <div className="mt-5  border flex flex-col justify-center p-5 px-10  rounded-lg">
          {/* Subtotal */}
          <div className="font-medium flex border-b py-3 justify-between mb-3">
            <h2>Subtotal</h2>
            <p>${subTotal.toFixed(2)}</p>
          </div>

          {/* Discount Section */}
          <div className="mb-4 flex flex-col justify-center ">
            <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
            <div className="flex items-center border bg-white justify-center rounded-lg">
              <input
                type="text"
                className=" outline-none border-0 rounded-lg  flex-1 px-2 py-2"
                placeholder="Discount Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className="h-full px-5 py-2 border-black border bg-black  text-white rounded-r-lg"
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
              onClick={proceedToCheckout}
              disabled={loading}
              className={`px-10 py-3 bg-black text-white rounded-lg flex items-center justify-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5"></span>
              ) : (
                "Proceed to Checkout"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
