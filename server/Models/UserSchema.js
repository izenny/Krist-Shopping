const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing whitespaces
    },
    password: {
      type: String,
      required: true,
      select: false, // Ensures the password isn't returned in queries
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
      lowercase: true, // Converts email to lowercase
      trim: true, // Removes leading/trailing whitespaces
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Basic email validation
    },
    // phoneNumber: {
    //   type: String,
    //   required: false,
    //   match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Optional validation
    // },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"], // Limits role values to 'user' or 'admin'
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      select: false, // Sensitive data
    },
    verificationTokenExpires: {
      type: Date,
      select: false, // Sensitive data
    },
    forgotPasswordOTP: {
      type: Number,
      select: false, // Sensitive data
    },
    forgotPasswordExpires: {
      type: Date,
      select: false, // Sensitive data
    }, 
    forgotPasswordToken: {
      type: String,
      select: false, // Sensitive data
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("User", UserSchema);
