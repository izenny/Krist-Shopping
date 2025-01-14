
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 100, // Limit title length for clarity
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    orginalprice: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    stock: [
      {
        size: {
          type: String,
          required: true,
          enum: ["XS", "S", "M", "L", "XL", "XXL"], // Example size options
        },
        color: {
          type: String,
          required: true,
          enum: ["Red", "Blue", "Green", "Black", "White"], // Example color options
        },
        quantity: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 0, max: 5 },
        comment: String,
      },
    ],
    offer: {
      type: String,
      default: "No Offer", // Default offer value, can be empty
    },
    discount: {
      type: Number,
      default: 0, // Default is no discount
      min: 0,
      max: 100, // Discount percentage should be between 0% and 100%
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
