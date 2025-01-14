const Payment = require("../Models/PaymentSchema");
const User = require("../Models/UserSchema");

// Create a new payment
exports.createPayment = async (req, res) => {
  const { user, order, transactionId, amount, status } = req.body;
  try {
    const newPayment = new Payment({
      user,
      order,
      transactionId,
      amount,
      status,
    });
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    log("error", error);
    res.status(500).json(error);
  }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get payment by user id

exports.getPaymentByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const payments = await Payment.find({ user: user._id });
    res.status(200).json(payments);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};


