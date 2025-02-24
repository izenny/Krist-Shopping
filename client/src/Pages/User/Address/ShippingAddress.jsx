import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import AddressCard from "../../../Components/User/Address/AddressCard";
import {
  addUserAddress,
  fetchUserAddress,
} from "../../../ApiCall/UserApiCalls";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setAddress } from "../../../Redux/OrderSlice";

import AddressForm from "../../../Components/User/Address/AddressForm";
const ShippingAddress = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const subtotal = 100;
  const deliveryCharge = 100;
  const grandTotal = subtotal - discountAmount + deliveryCharge;
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleDeleteAddress = (address) => {
    setAddresses((prev) =>
      prev.filter((savedAddress) => savedAddress.id !== address.id)
    );
  };

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountAmount(10);
    } else {
      alert("Invalid discount code");
    }
  };

  //address
  const FetchAddress = async () => {
    try {
      const response = await fetchUserAddress();
      setAddresses(response.addresses);
    } catch (error) {
      console.log();
    }
  };
  useEffect(() => {
    FetchAddress();
  }, []);

  const navigate = useNavigate();
  const deliverHere = async () => {
    try {
      if (!addresses) {
        toast.error("select your delivery address");
        console.log("no address");
      }
      console.log("address", selectedAddress);
      setLoading(true);
      dispatch(setAddress(selectedAddress));
      navigate("/payment");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong while selecting address");
    }
  };
  const submitNewAddress = async (formData) => {
    try {
      setLoading(true);
      const response = await addUserAddress(formData);
      FetchAddress();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to add addresses:", error);
    }
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <div className="flex flex-col md:flex-row gap-20 justify-center w-full">
        <div className="md:w-3/5">
          <div className="flex items-center justify-between w-full px-5 mb-6 relative">
            {/* Line behind the icons */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <IoHomeOutline />
            </div>
            <div className="relative z-10 text-3xl bg-white p-2">
              <MdOutlinePayment />
            </div>
            <div className="relative z-10 text-3xl bg-white p-2">
              <MdOutlineRateReview />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Select a delivery address
            </h2>
            <p className="mb-4 ">
              Is the address you'd like to use displayed below? If so, click the
              checkbox to select. Or, you can enter a new delivery address.
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {addresses?.map((address) => (
                <AddressCard
                  key={address._id}
                  address={address}
                  isSelected={selectedAddress?._id === address?._id}
                  onSelect={handleSelectAddress}
                  onDelete={handleDeleteAddress}
                  selection={true}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <button
              className="px-4 py-3 md:w-1/3 bg-black hover:scale-105 text-white rounded-md"
              onClick={deliverHere}
            >
              Deliver Here
            </button>
          </div>
          <div className="mt-6">
            {/* <h2 className="text-xl font-semibold mb-2">Add a new address</h2> */}

            <AddressForm onSubmit={submitNewAddress} isLoading={loading} />
          </div>
        </div>
        <div className="mt-10 border  h-fit flex flex-col justify-center p-5 px-10 rounded-lg">
          <div className="font-medium flex border-b py-3 justify-between mb-3">
            <h2>Subtotal</h2>
            <p>${subtotal.toFixed(2)}</p>
          </div>
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
          </div>
          <div className="font-medium flex justify-between mb-3">
            <h2>Delivery Charge</h2>
            <p>${deliveryCharge.toFixed(2)}</p>
          </div>
          <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
            <h2>Grand Total</h2>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
