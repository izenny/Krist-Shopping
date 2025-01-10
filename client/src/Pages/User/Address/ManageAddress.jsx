import React, { useState } from "react";
import AddressCard from "../../../Components/User/Address/AddressCard";
import { FaPlus } from "react-icons/fa6";

const ManageAddress = () => {
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
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-1/4 "><button className="w-full h-full flex items-center justify-center gap-4 bg-black text-white py-3 rounded-lg"><FaPlus/>Add New Address</button></div>
      <div className="grid gap-2">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            // isSelected={selectedAddressId === address.id}
            // onSelect={handleSelectAddress}
            // onDelete={handleDeleteAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageAddress;
