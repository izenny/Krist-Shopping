const Address = require("../Models/AddressSchema");
const User = require("../Models/UserSchema");

// create a new address

exports.createAddress = async (req, res) => {
  const {
    name,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
  } = req.body;
  const  _id  = req.user._id;
  // console.log("User ID: ", _id);
  
  if (
    !name ||
    !phone ||
    !addressLine1 ||
    !city ||
    !state ||
    !postalCode ||
    !country
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const userAddress = await Address.findOne({ user: _id });
    if (userAddress) {
      userAddress.addresses.push({
        name,
        phone,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
      });
      await userAddress.save();
      return res
        .status(201)
        .json({ message: "Address added successfully", userAddress });
    } else {
      const newAddress = new Address({
        user : _id,
        addresses: [
          {
            name,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
            default: true,
          },
        ],
      });
      await newAddress.save();
      return res
        .status(201)
        .json({ message: "Address added successfully", newAddress });
    }
  } catch (error) {
    console.error("Error creating address: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all addresses

exports.getAddresses = async (req, res) => {
  const  _id  = req.user._id;
  try {
    const userAddress = await Address.findOne({ user : _id})
    if (!userAddress) {
      return res.status(404).json({ message: "No address found" });
    }
    return res.status(200).json(userAddress);
  } catch (error) {
    console.error("Error getting address: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update an address

exports.updateAddress = async (req, res) => {
  const { user } = req.params;
  const { addressId } = req.params;
  const {
    name,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
  } = req.body;

  try {
    // Find the address by user ID and addressId
    const addressData = await Address.findOne({
      user,
      "addresses._id": addressId,
    });

    if (!addressData) {
      return res.status(404).json({ message: "No address found" });
    }

    const address = addressData.addresses.id(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    // Update the address fields
    address.name = name;
    address.phone = phone;
    address.addressLine1 = addressLine1;
    address.addressLine2 = addressLine2;
    address.city = city;
    address.state = state;
    address.postalCode = postalCode;
    address.country = country;

    // Save the updated address document
    await addressData.save();

    return res.status(200).json({
      message: "Address updated successfully",
      address,
    });
  } catch (error) {
    console.error("Error updating address: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteAddress = async (req, res) => {
  const user = req.user._id;
  const {address }= req.params;
console.log(user,address);

  try {
    // Find the user address by user ID and addressId
    const addressData = await Address.findOne({
      user,
      "addresses._id": address,
    });

    if (!addressData) {
      return res.status(404).json({ message: "No address found" });
    }

    addressData.addresses = addressData.addresses.filter((addr) => addr._id.toString() !== address);


    // Save the updated address document
    await addressData.save();

    return res.status(200).json({
      message: "Address deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting address: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
