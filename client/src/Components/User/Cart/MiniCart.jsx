

import React, { useState } from "react";
import OrderProducts from "../Order/OrderProducts";
import image from "../../../assets/Bags.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOrderItems } from "../../../Redux/OrderSlice";
import { deleteCartItem, UpdateCart } from "../../../Redux/CartSlice";

const MiniCart = ({ onClose }) => {
  const navigate = useNavigate();
  

  const { items, subTotal, isLoading } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [discountAmount, setDiscountAmount] = useState(0);

  const incrementQuantity = async (product) => {
    try {
      const cartData = {
        product: product.product,
        quantity: product.quantity + 1, // Increment quantity
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

  const viewCart = () => {
    if (onClose) onClose();
    navigate("/checkout");
  };

  const deliveryCharge = 100;
  const grandTotal = Math.max(subTotal - discountAmount + deliveryCharge, 0);
  const proceedToCheckout = async () => {
    try {
      setLoading(true);
      dispatch(setOrderItems({ items, totalPrice: grandTotal }));
      if (onClose) onClose();
      navigate("/shipping-address");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong while checking out");
    }
  };
  return (
    <div>
      {isAuthenticated ? (
        items?.length > 0 ? (
          <div className="w-full">
            <h2>
              Your cart has {items?.length}{" "}
              {items?.length === 1 ? "item" : "items"}
            </h2>
            <OrderProducts
              products={items}
              incrementQuantity={(product) => incrementQuantity(product)}
              decrementQuantity={(product) => decrementQuantity(product)}
              deleteProduct={(product) => deleteProduct(product)}
            />
            <div>
              <div className="flex px-5 justify-between">
                <h2>Subtotal</h2>
                <p>${subTotal}</p>
              </div>
              <div className="flex flex-col items-center px-5 gap-2 w-full mt-4">
                <button
                  onClick={viewCart}
                  className="px-4 py-2 w-full rounded-md bg-black text-white"
                >
                  View Cart
                </button>
                <button
                  onClick={proceedToCheckout}
                  className="px-4 py-2 w-full rounded-md bg-black text-white"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-4">
            <p>Your cart is empty</p>
            <button
              onClick={() => navigate("/product-listing")}
              className="px-4 py-2 mt-2 rounded-md bg-black text-white"
            >
              Add Products to Cart
            </button>
          </div>
        )
      ) : (
        <div className="text-center p-4">
          <p>Please login or sign up to view your cart</p>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 mt-2 rounded-md bg-black text-white"
          >
            Login or Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
