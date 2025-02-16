const {
  SignUp,
  LogIn,
  LogOut,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  CheckAuth,
} = require("../Controllers/AuthController");
const { VerifyToken } = require("../Middlewares/VerifyToken");

const router = require("express").Router();

router.post("/register", SignUp);
router.post("/login", LogIn);
router.post("/logout", LogOut);
router.post("/verify-email", VerifyEmail);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password/:token", ResetPassword);
router.get("/check-auth", VerifyToken, CheckAuth);

module.exports = router;
