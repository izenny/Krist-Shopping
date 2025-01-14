const JWT = require("jsonwebtoken");

exports.VerifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    console.log("decoded:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error in VerifyToken:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
