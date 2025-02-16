const JWT = require("jsonwebtoken");

exports.generateToken = (res, userId) => {
  const token = JWT.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "5h", // Use "5h" for clarity instead of "5hr"
  });

  // Set the cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevent access via JavaScript
    secure: process.env.NODE_ENV === "production", // Ensure HTTPS in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 5 * 60 * 60 * 1000, // 5 hours (comment fixed)
  });

  return token; // Ensure this is used properly in the calling function
};



exports.GenerateOtp = () => { // Fixed function name
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit OTP
};