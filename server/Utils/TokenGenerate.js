const JWT = require("jsonwebtoken");

exports.generateToken = (res, userId) => {
  const token = JWT.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });

  res.cookie("token", token, {
    httpOnly: true,  // Prevent JavaScript access (secure)
    secure: process.env.NODE_ENV === "production", // Enforce HTTPS in production
    sameSite: "None",  // REQUIRED for cross-site cookies
    maxAge: 5 * 60 * 60 * 1000, // 5 hours
  });

  return token;
};


exports.GenerateOtp = () => { // Fixed function name
  return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit OTP
};