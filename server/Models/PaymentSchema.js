const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true,
      },
      transactionId: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["Pending", "Completed", "Failed"],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Payment", PaymentSchema);