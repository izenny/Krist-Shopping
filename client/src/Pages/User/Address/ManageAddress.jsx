import React, { useEffect, useState } from "react";
import AddressCard from "../../../Components/User/Address/AddressCard";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addUserAddress, fetchUserAddress } from "../../../ApiCall/UserApiCalls";
import AddressForm from "../../../Components/User/Address/AddressForm";

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetchUserAddress();
        setAddresses(response.addresses || []);
      } catch (error) {
        console.error("Failed to fetch addresses:", error);
      }
    };
    fetchAddresses();
  }, []);
  const submitNewAddress = async(formData)=>{
    try {
      const response = await addUserAddress(formData)

    } catch (error) {
      console.error("Failed to fetch addresses:", error);
    }

  }
  return (
    <div className="w-full flex flex-col gap-8 ">
      <div className="w-1/4 ">
        <button
          onClick={() => setShowAddressForm(!showAddressForm)}
          className="w-full h-full flex items-center justify-center gap-4 bg-black text-white py-3 rounded-lg"
        >
          {!showAddressForm ? <FaPlus /> : <FaMinus />}
          Add New Address
        </button>
      </div>
      {!showAddressForm ? (
        <div className="grid grid-cols-2 gap-2">
          {addresses.length > 0 ? (
            addresses?.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                // isSelected={selectedAddressId === address.id}
                // onSelect={handleSelectAddress}
                // onDelete={handleDeleteAddress}
              />
            ))
          ) : (
            <div>no address added</div>
          )}
        </div>
      ) : (
        <div className="flex w-full">
          <AddressForm onSubmit={submitNewAddress}/>
        </div>
      )}
    </div>
  );
};

export default ManageAddress;
