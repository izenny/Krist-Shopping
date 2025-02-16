const JWT = require("jsonwebtoken");
const User = require("../Models/UserSchema");

exports.VerifyToken = async (req, res, next) => {
  // console.log("called");

  const token = req.cookies.token;
  // console.log("token:", token);

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in VerifyToken:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
