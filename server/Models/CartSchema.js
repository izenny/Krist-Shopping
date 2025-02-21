
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
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
        image: { type: String }, // ✅ Add image field here
      },
    ],
    subTotal: {
      type: Number, 
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
