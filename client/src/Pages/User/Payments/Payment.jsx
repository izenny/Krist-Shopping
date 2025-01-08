// import React, { useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// const Payment = () => {
//   const [discountCode, setDiscountCode] = useState("");
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [deliveryCharge, setDeliveryCharge] = useState(10);
//   const subtotal = 100;
//   const navigate = useNavigate();

//   const applyDiscount = () => {
//     if (discountCode === "DISCOUNT10") {
//       setDiscountAmount(subtotal * 0.1); // Example discount logic
//     } else {
//       setDiscountAmount(0);
//     }
//   };

//   const grandTotal = subtotal - discountAmount + deliveryCharge;

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
//       <div className="flex flex-col md:flex-row gap-20 justify-center w-full">
//         <div className="md:w-3/5">
//           <div className="flex items-center justify-between w-full px-5 mb-6 relative">
//             {/* Line behind the icons */}
//             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

//             <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
//               <IoHomeOutline />
//             </div>
//             <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
//               <MdOutlinePayment />
//             </div>
//             <div className="relative z-10 text-3xl bg-white p-2">
//               <MdOutlineRateReview />
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold mb-2">
//               Select a payment method
//             </h2>
//             <div>
// payment methods as radio buttons
//             </div>
//           </div>
//           <div className="mt-5">
//             <button
//               className="px-4 py-3 md:w-1/3 bg-black hover:scale-105 text-white rounded-md"
//               onClick={() => navigate("/payment")}
//             >
//               Continue
//             </button>
//           </div>
//         </div>

//         <div className="mt-10 border h-fit flex flex-col justify-center p-5 px-10 rounded-lg">
//           <div className="font-medium flex border-b py-3 justify-between mb-3">
//             <h2>Subtotal</h2>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="mb-4 flex flex-col justify-center">
//             <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
//             <div className="flex items-center border bg-white justify-center rounded-lg">
//               <input
//                 type="text"
//                 className="outline-none border-0 rounded-lg flex-1 px-2 py-2"
//                 placeholder="Discount Code"
//                 value={discountCode}
//                 onChange={(e) => setDiscountCode(e.target.value)}
//               />
//               <button
//                 className="h-full px-5 py-2 border-black border bg-black text-white rounded-r-lg"
//                 onClick={applyDiscount}
//               >
//                 Apply
//               </button>
//             </div>
//             {discountAmount > 0 && (
//               <p className="text-green-500 mt-2">
//                 Discount Applied: -${discountAmount.toFixed(2)}
//               </p>
//             )}
//           </div>
//           <div className="font-medium flex justify-between mb-3">
//             <h2>Delivery Charge</h2>
//             <p>${deliveryCharge.toFixed(2)}</p>
//           </div>
//           <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
//             <h2>Grand Total</h2>
//             <p>${grandTotal.toFixed(2)}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(10);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const subtotal = 100;
  const navigate = useNavigate();

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscountAmount(subtotal * 0.1); // Example discount logic
    } else {
      setDiscountAmount(0);
    }
  };

  const grandTotal = subtotal - discountAmount + deliveryCharge;

  const paymentMethods = ["Credit Card", "Debit Card", "UPI", "Net Banking", "Cash on Delivery"];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className="flex flex-col md:flex-row gap-20 justify-center w-full">
        <div className="md:w-3/5">
          <div className="flex items-center justify-between w-full px-5 mb-6 relative">
            {/* Line behind the icons */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>

            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <IoHomeOutline />
            </div>
            <div className="relative z-10 text-3xl bg-black text-white p-2 rounded-lg">
              <MdOutlinePayment />
            </div>
            <div className="relative z-10 text-3xl bg-white p-2">
              <MdOutlineRateReview />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Select a payment method</h2>
            <div>
              {paymentMethods.map((method, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <input
                    type="radio"
                    id={method}
                    name="paymentMethod"
                    value={method}
                    checked={selectedPaymentMethod === method}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={method} className="text-md">
                    {method}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <button
              className="px-4 py-3 md:w-1/3 bg-black hover:scale-105 text-white rounded-md"
              onClick={() => {
                if (selectedPaymentMethod) {
                  navigate("/order-summary"); // Redirect to the next page
                } else {
                  alert("Please select a payment method!");
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>

        <div className="mt-10 border h-fit flex flex-col justify-center p-5 px-10 rounded-lg">
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

export default Payment;
