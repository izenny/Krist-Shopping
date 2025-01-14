const Order = require("../Models/OrderSchema");
const Cart = require("../Models/CartSchema");

// Create a new order
exports.createOrder = async (req, res) => {
  const { user } = req;
  try {
    // Step 1: Find the user's cart
    const cart = await Cart.findOne({ user });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "No items in cart to place an order" });
    }

    // Step 2: Calculate total price
    let totalAmount = cart.items.reduce((total, item) => {
      return total + (item.quantity * item.product.price);
    }, 0);

    // Step 3: Create a new order
    const newOrder = new Order({
      user,
      items: cart.items,
      totalAmount: totalAmount,
      shippingAddress: req.body.shippingAddress, // Assuming shipping address is sent via request
      status: "Pending", // Default status
    });

    await newOrder.save();

    // Step 4: Optionally, clear the user's cart after creating the order
    await Cart.updateOne({ user }, { $set: { items: [] } });

    return res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get orders by user
exports.getOrdersByUser = async (req, res) => {
  const { user } = req;
  try {
    const orders = await Order.find({ user }).populate("items.product");
    
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    return res.status(200).json({
      orders: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a specific order by order ID
exports.getOrderById = async (req, res) => {
  const { user, orderId } = req.params;
  try {
    const order = await Order.findOne({ _id: orderId, user }).populate("items.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.status(200).json({
      order: order,
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  const { user, orderId } = req.params;
  const { status } = req.body;
  
  try {
    const order = await Order.findOne({ _id: orderId, user });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order status
    order.status = status;
    await order.save();

    return res.status(200).json({
      message: "Order status updated successfully",
      order: order,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

