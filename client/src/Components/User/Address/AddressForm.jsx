import React, { useState } from "react";

const AddressForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full px-10 border py-5 rounded-lg text-center ">
      <h2 className="text-xl font-semibold text-center">Add New Address</h2>

      <form
        onSubmit={handleSubmit}
        className="gap-5 p-5 text-left grid md:grid-cols-2 mx-auto bg-white  "
      >
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="1234567890"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Address Line 1</label>
          <input
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="123 Main Street"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Address Line 2</label>
          <input
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Apt 4B"
          />
        </div>
        <div>
          <label className="block font-medium">City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">State</label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Postal Code</label>
          <input
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Country</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-black text-white py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
