const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: { type: String },
        quantity: { type: Number, required: true, min: 1 },
        color: { type: String },
        size: { type: String },
        price: { type: Number, required: true, min: 0 },
        total: { type: Number, required: true, min: 0 },
        image: { type: String },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["COD", "Card", "UPI", "PayPal", "Google Pay", "Apple Pay"],
    },
    paymentStatus: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Paid", "Failed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
