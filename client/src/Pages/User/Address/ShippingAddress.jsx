// import React from "react";

// const ShippingAddress = () => {
//   return (
//     <div>
//       <h2>Shipping Address</h2>
//       <div>
//         <div className="flex">
//           <div>homeicon</div>
//           <div>paymenticon</div>
//           <div>review icon</div>
//         </div>
//         <div>
//           <h2>Select a delivery address</h2>
//           <p>
//             is the address you'd like to use displayed below? if so ,click the
//             corresponding "Delivery to this address" buton .or you can enter a
//             new delivery address
//           </p>
//           <div>address component</div>
//           <button>Deliver Here</button>
//         </div>
//         <div>
//           <h2>Add a new address</h2>
//           <div>addressform</div>
//         </div>
//       </div>
//       <div>
//         <div className="mt-5  border flex flex-col justify-center p-5 px-10  rounded-lg">
//           {/* Subtotal */}
//           <div className="font-medium flex border-b py-3 justify-between mb-3">
//             <h2>Subtotal</h2>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>

//           {/* Discount Section */}
//           <div className="mb-4 flex flex-col justify-center ">
//             <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
//             <div className="flex items-center border bg-white justify-center rounded-lg">
//               <input
//                 type="text"
//                 className=" outline-none border-0 rounded-lg  flex-1 px-2 py-2"
//                 placeholder="Discount Code"
//                 value={discountCode}
//                 onChange={(e) => setDiscountCode(e.target.value)}
//               />
//               <button
//                 className="h-full px-5 py-2 border-black border bg-black  text-white rounded-r-lg"
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

//           {/* Delivery Charge */}
//           <div className="font-medium flex justify-between mb-3">
//             <h2>Delivery Charge</h2>
//             <p>${deliveryCharge.toFixed(2)}</p>
//           </div>

//           {/* Grand Total */}
//           <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
//             <h2>Grand Total</h2>
//             <p>${grandTotal.toFixed(2)}</p>
//           </div>

//           {/* Checkout Button */}
//           <div className="w-full flex items-center justify-center">
//             <button
//               onClick={() => navigate("/shipping-address")}
//               className="px-10 py-3 bg-black text-white rounded-lg"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingAddress;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlinePayment } from "react-icons/md";
// import { MdOutlineRateReview } from "react-icons/md";
// import AddressForm from "./AddressForm";
// import AddressCard from "../../../Components/User/Address/AddressCard";
// const ShippingAddress = () => {
//   const [discountCode, setDiscountCode] = useState("");
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const subtotal = 100; // Example subtotal
//   const deliveryCharge = 10; // Example delivery charge
//   const grandTotal = subtotal - discountAmount + deliveryCharge;
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       phone: "123-456-7890",
//       addressLine: "123 Main Street",
//       city: "New York",
//       state: "NY",
//       zip: "10001",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       phone: "987-654-3210",
//       addressLine: "456 Elm Street",
//       city: "San Francisco",
//       state: "CA",
//       zip: "94102",
//     },
//   ]);

//   const [selectedAddressId, setSelectedAddressId] = useState(null);

//   const handleSelectAddress = (address) => {
//     setSelectedAddressId(address.id === selectedAddressId ? null : address.id);
//   };

//   const handleDeleteAddress = (address) => {
//     setAddresses((prev) =>
//       prev.filter((savedAddress) => savedAddress.id !== address.id)
//     );
//   };

//   const handleEditAddress = (address) => {
//     // Logic for editing an address (e.g., open a form with the address details)
//     alert(`Editing address: ${address.name}`);
//   };
//   const applyDiscount = () => {
//     // Example discount logic
//     if (discountCode === "SAVE10") {
//       setDiscountAmount(10);
//     } else {
//       alert("Invalid discount code");
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl  font-bold mb-4">Shipping Address</h2>
//       <div className="flex flex-col md:flex-row gap-20 justify-center  w-full">
//       <div className="md:w-3/5">
//         <div className="flex space-x-4 w-full justify-between px-5  mb-6">
//           <div><IoHomeOutline /></div>
//           <div><MdOutlinePayment /></div>
//           <div><MdOutlineRateReview /></div>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Select a delivery address</h2>
//           <p className="mb-4">
//             Is the address you'd like to use displayed below? If so, click the
//             corresponding "Deliver to this address" button. Or, you can enter a
//             new delivery address.
//           </p>
//           <div>
//           {addresses.map((address) => (
//           <AddressCard
//             key={address.id}
//             address={address}
//             onSelect={handleSelectAddress}
//             onDelete={handleDeleteAddress}
//           />
//         ))}
//           </div>
//           <button className="px-5 py-3 bg-black w-52 text-center text-white rounded-md mt-3">
//             Deliver Here
//           </button>
//         </div>
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-2">Add a new address</h2>
//           <div>
//             <AddressForm/>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 border flex flex-col justify-center p-5 px-10 rounded-lg">
//         <div className="font-medium flex border-b py-3 justify-between mb-3">
//           <h2>Subtotal</h2>
//           <p>${subtotal.toFixed(2)}</p>
//         </div>
//         <div className="mb-4 flex flex-col justify-center">
//           <p className="mb-2 text-sm font-medium">Enter Discount Code</p>
//           <div className="flex items-center border bg-white justify-center rounded-lg">
//             <input
//               type="text"
//               className="outline-none border-0 rounded-lg flex-1 px-2 py-2"
//               placeholder="Discount Code"
//               value={discountCode}
//               onChange={(e) => setDiscountCode(e.target.value)}
//             />
//             <button
//               className="h-full px-5 py-2 border-black border bg-black text-white rounded-r-lg"
//               onClick={applyDiscount}
//             >
//               Apply
//             </button>
//           </div>
//           {discountAmount > 0 && (
//             <p className="text-green-500 mt-2">
//               Discount Applied: -${discountAmount.toFixed(2)}
//             </p>
//           )}
//         </div>
//         <div className="font-medium flex justify-between mb-3">
//           <h2>Delivery Charge</h2>
//           <p>${deliveryCharge.toFixed(2)}</p>
//         </div>
//         <div className="font-semibold flex border-t pt-4 justify-between text-lg mb-6">
//           <h2>Grand Total</h2>
//           <p>${grandTotal.toFixed(2)}</p>
//         </div>
//         <div className="w-full flex items-center justify-center">
//           <button
//             onClick={() => navigate("/checkout")}
//             className="px-10 py-3 bg-black text-white rounded-lg"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ShippingAddress;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import AddressForm from "./AddressForm";
import AddressCard from "../../../Components/User/Address/AddressCard";

const ShippingAddress = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const subtotal = 100;
  const deliveryCharge = 10;
  const grandTotal = subtotal - discountAmount + deliveryCharge;

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      addressLine: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      addressLine: "456 Elm Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleSelectAddress = (address) => {
    setSelectedAddressId(address.id === selectedAddressId ? null : address.id);
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

  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <div className="flex flex-col md:flex-row gap-20 justify-center w-full">
        <div className="md:w-3/5">
          {/* <div className="flex space-x-4 w-full  justify-between px-5 mb-6">
            <div className="text-3xl">
              <IoHomeOutline />
            </div>
            <div className="text-3xl">
              <MdOutlinePayment />
            </div>
            <div className="text-3xl">
              <MdOutlineRateReview />
            </div>
          </div> */}
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
              {addresses.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  isSelected={selectedAddressId === address.id}
                  onSelect={handleSelectAddress}
                  onDelete={handleDeleteAddress}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <button
              className="px-4 py-3 md:w-1/3 bg-black hover:scale-105 text-white rounded-md"
              onClick={() => navigate("/payment")}
            >
              Deliver Here
            </button>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Add a new address</h2>
            <AddressForm />
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
