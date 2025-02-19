// import React, { useEffect, useState } from "react";
// import AddressCard from "../../../Components/User/Address/AddressCard";
// import { FaMinus, FaPlus } from "react-icons/fa6";
// import {
//   addUserAddress,
//   fetchUserAddress,
// } from "../../../ApiCall/UserApiCalls";
// import AddressForm from "../../../Components/User/Address/AddressForm";

// const ManageAddress = () => {
//   const [addresses, setAddresses] = useState([]);
//   const [showAddressForm, setShowAddressForm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const fetchAddresses = async () => {
//     try {
//       const response = await fetchUserAddress();
//       setAddresses(response.addresses || []);
//     } catch (error) {
//       console.error("Failed to fetch addresses:", error);
//     }
//   };
//   useEffect(() => {
//     fetchAddresses();
//   }, []);
//   const submitNewAddress = async (formData) => {
//     try {
//       setLoading(true)
//       const response = await addUserAddress(formData);
//       fetchAddresses();
//       setShowAddressForm(false);

//     } catch (error) {
//       setLoading(false)
//       console.error("Failed to fetch addresses:", error);
//     }
//   };
//   return (
//     <div className="w-full h-full flex flex-col gap-8 ">
//       <div className="w-1/4 ">
//         <button
//           onClick={() => setShowAddressForm(!showAddressForm)}
//           className="w-full h-full flex items-center justify-center gap-4 bg-black text-white py-3 rounded-lg"
//         >
//           {!showAddressForm ? <FaPlus /> : <FaMinus />}
//           Add New Address
//         </button>
//       </div>
//       <div>
//       {!showAddressForm ? (
//         <div className="grid grid-cols-2 gap-2">
//           {addresses.length > 0 ? (
//             addresses?.map((address) => (
//               <AddressCard
//                 key={address._id}
//                 address={address}
//                 // isSelected={selectedAddressId === address.id}
//                 // onSelect={handleSelectAddress}
//                 // onDelete={handleDeleteAddress}
//               />
//             ))
//           ) : (
//             <div>no address added</div>
//           )}
//         </div>
//       ) : (
//         <div className="flex w-full overflow-y-auto">
//           <AddressForm onSubmit={submitNewAddress} isLoading={loading}/>
//         </div>
//       )}
//       </div>
//     </div>
//   );
// };

// export default ManageAddress;

import React, { useEffect, useState } from "react";
import AddressCard from "../../../Components/User/Address/AddressCard";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  addUserAddress,
  deleteUserAddress,
  fetchUserAddress,
} from "../../../ApiCall/UserApiCalls";
import AddressForm from "../../../Components/User/Address/AddressForm";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchAddresses = async () => {
    try {
      const response = await fetchUserAddress();
      setAddresses(response.addresses || []);
    } catch (error) {
      console.error("Failed to fetch addresses:", error);
    }
  };
  useEffect(() => {
    fetchAddresses();
  }, []);
  const submitNewAddress = async (formData) => {
    try {
      setLoading(true);
      const response = await addUserAddress(formData);
      fetchAddresses();
      setShowAddressForm(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to add addresses:", error);
    }
  };
  const handleDeleteAddress = async (address) => {
    try {
      const response = await deleteUserAddress(address)
      fetchAddresses()
    } catch (error) {
      console.log("failed to delete address", error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-1/4">
        <button
          onClick={() => setShowAddressForm(!showAddressForm)}
          className="w-full h-full flex items-center justify-center gap-4 bg-black text-white py-3 rounded-lg"
        >
          {!showAddressForm ? <FaPlus /> : <FaMinus />}
          Add New Address
        </button>
      </div>

      {!showAddressForm ? (
        <div className="overflow-y-auto max-h-[500px] grid grid-cols-2 gap-2 p-2">
          {addresses.length > 0 ? (
            addresses?.map((address) => (
              <AddressCard key={address._id} address={address}  onDelete={handleDeleteAddress}/>
            ))
          ) : (
            <div>No address added</div>
          )}
        </div>
      ) : (
        <div className="flex w-full overflow-y-auto max-h-[500px]">
          <AddressForm onSubmit={submitNewAddress} isLoading={loading} />
        </div>
      )}
    </div>
  );
};

export default ManageAddress;
