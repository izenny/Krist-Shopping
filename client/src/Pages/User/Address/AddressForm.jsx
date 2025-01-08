import React, { useState } from "react";

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
    setAddress({
      name: "",
      phone: "",
      addressLine: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <form onSubmit={handleAddressSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={address.phone}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Address Line</label>
        <input
          type="text"
          name="addressLine"
          value={address.addressLine}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleAddressChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
