
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
      maxlength: 100,
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
        },
        color: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    images: [
      {
        url: String,
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
      default: "No Offer",
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    brand: { type: String }, // Added brand
    gender: { type: String }, // Added gender
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
