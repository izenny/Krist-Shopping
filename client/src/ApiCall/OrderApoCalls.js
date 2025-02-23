import toast from "react-hot-toast";
import { axiosInstance } from "../Constants/Api";

export const CheckoutApiCall = async (orderData) => {
  try {
    console.log(orderData);
    
    const response = await axiosInstance.post(`order/placeorder`, orderData);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Checkout error:", error.response?.data || error.message);
    toast.error(
      error.response?.data?.message ||
        "Failed to place order. Please try again."
    );
    return null; // Returning null to indicate failure
  }
};
