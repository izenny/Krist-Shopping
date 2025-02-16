const transport = require("../Middlewares/SendEmail");
const User = require("../Models/UserSchema");
const { generateToken, GenerateOtp } = require("../Utils/TokenGenerate");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
// sign up
exports.SignUp = async (req, res) => {
  console.log(req.body);

  const { username, email, password, role, agree } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }
    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    // const verificationToken = crypto.randomBytes(32).toString("hex"); // Generate a random token for email verification
    const verificationToken = await GenerateOtp();
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      verificationToken,
      verificationTokenExpires: Date.now() + 12 * 60 * 60 * 1000, // 12 hours
    });
    //send email
    try {
      let info = await transport.sendMail({
        from: process.env.NODE_SENDING_EMAIL_ADDRESS,
        to: email,
        subject: "Verify Your Email",
        html: `<h1>Your Verification Code: ${verificationToken}</h1>`,
      });

      // console.log("Email Sending Response:", info);

      if (!info.accepted.includes(email)) {
        return res.status(500).json({
          success: false,
          message: "Failed to send verification email. Please try again.",
        });
      }
    } catch (emailError) {
      console.error("Email Sending Error:", emailError);
      return res.status(500).json({
        success: false,
        message: `Failed to send verification email: ${emailError.message}`,
      });
    }

    await newUser.save();
    const token = generateToken(res, newUser._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
        isVerified: newUser.isVerified,
      },
    });
  } catch (error) {
    console.error("Error in SignUp:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// login
exports.LogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password"); // This will include password in the result

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const isVerified = user.isVerified;
    // if (!isVerified) {
    //   return res.status(400).json({ message: "Email not verified" });
    // }

    const isBlocked = user.isBlocked;
    if (isBlocked) {
      return res.status(400).json({ message: "Your Account has been blocked" });
    }

    // Now, you will get the token that can be used further
    const token = generateToken(res, user._id);
    console.log("token", token); // This should print the actual token now

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        email: user.email,
        username: user.username,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("Error in Login:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//logout

exports.LogOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.log("Error in Logout:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//verify email

exports.VerifyEmail = async (req, res) => {
  const { otp } = req.body;
  // console.log("otp", otp);

  try {
    const user = await User.findOne({
      verificationToken: otp,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    // console.log("user", user);

    const isExpired = user.verificationTokenExpires < Date.now();
    if (isExpired) {
      return res.status(400).json({ message: "Token expired" });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        email: user.email,
        username: user.username,
        role: user.role,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("Error in VerifyEmail:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.ForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const forgotPasswordToken = crypto.randomBytes(32).toString("hex");
    user.forgotPasswordToken = forgotPasswordToken;
    user.forgotPasswordExpires = Date.now() + 30 * 60 * 1000; // 30 minutes
    await user.save();
    //send email with forgotPasswordToken

    res.status(200).json({
      success: true,
      message: "Forgot password token sent successfully",
    });
  } catch (error) {
    console.error("Error in ForgotPassword:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//reset password
exports.ResetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid token" });
    }
    const isExpired = user.forgotPasswordExpires < Date.now();
    if (isExpired) {
      return res.status(400).json({ message: "Token expired" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpires = undefined;

    //semd email to user

    await user.save();
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("Error in ResetPassword:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// check auth
exports.CheckAuth = async (req, res) => {
  try {
    // res.status(200).json(req.user)
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        email: req.user.email,
        username: req.user.username,
        role: req.user.role,
        isVerified: req.user.isVerified,
      },
    });
  } catch (error) {
    console.log("Error in check auth:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
