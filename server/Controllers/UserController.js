const User = require("../Models/UserSchema");
const Address = require("../Models/AddressSchema");

exports.getUserById = async (req, res) => {
  const { _id } = req.user;
  try {
    // Find user excluding password field
    const user = await User.findById(_id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find user's addresses and select only the default address
    const addressRecord = await Address.findOne({ user: _id }).select(
      "addresses"
    );

    let defaultAddress = null;
    if (addressRecord && addressRecord.addresses.length > 0) {
      defaultAddress =
        addressRecord.addresses.find((addr) => addr.default) ||
        addressRecord.addresses[0]; // Select default or first if none
    }

    // Attach default address to user data
    const userData = {
      ...user.toObject(),
      defaultAddress,
    };

    res.status(200).json(userData);
  } catch (error) {
    console.error("Error in getUserById:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update Userdata by ID

exports.updateUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in updateUserById:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
