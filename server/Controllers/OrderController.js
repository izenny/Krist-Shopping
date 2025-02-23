const Order = require("../Models/OrderSchema");
const Cart = require("../Models/CartSchema");
const Product = require("../Models/ProductSchema"); // Import Product model

// Create a new order and update stock after successful order placement
exports.createOrder = async (req, res) => {
  try {
    const user = req.user.id;
    const { cartId, items, totalPrice, shippingAddress, paymentMethod } = req.body;

    console.log("Request Body:", req.body); // Debugging log

    let cart = null;

    // Step 1: If cartId is provided, find the user's cart
    if (cartId) {
      cart = await Cart.findById(cartId);
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: "No items in cart to place an order" });
      }
    }

    const orderItems = items; // Use destructured 'items' instead of 'orderData.items'

    // Step 2 & 3: Validate stock and prepare stock updates
    let productUpdates = [];

    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.name}` });
      }

      // Find stock entry that matches the size & color
      const stockEntry = product.stock.find(
        (s) => s.size === item.size && s.color === item.color
      );

      if (!stockEntry || stockEntry.quantity < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${item.name}` });
      }

      // Reduce stock & store the update
      stockEntry.quantity -= item.quantity;
      productUpdates.push(product.save());
    }

    // Step 4: Create a new order
    const newOrder = new Order({
      user,
      items: orderItems,
      totalPrice: totalPrice || (cart ? cart.subTotal + 100 : 0), // Calculate if not provided
      status: "Pending",
      shippingAddress,
      paymentMethod,
      paymentStatus: "Pending",
    });

    await newOrder.save();

    // Step 5: Update stock in DB after order creation
    await Promise.all(productUpdates);

    // Step 6: If cartId is provided, clear the user's cart
    if (cartId) {
      await Cart.findByIdAndUpdate(cartId, { $set: { items: [] } });
    }

    return res.status(201).json({
      message: "Order placed successfully, stock updated",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



//add to order from cartid

// exports.addToOrderByCartId = async(req,res)=>{
//   try {
//     const user = req.user._id;
//     const {cart}= req.params.cart

//     if(!user || !cart){
//       return res.status(400).json({success:false, message :"cart id is required"})
//     }
//     const cartItems = await Cart.findById(cart)
//     if(!cartItems){
//       return res.status(400).json({success:false, message :"cart not found"})
//     }

//     const order = new Order({
//       user,
//       items:cartItems.items

//     })

//   } catch (error) {
//     console.error("Error adding  order:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

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
    const order = await Order.findOne({ _id: orderId, user }).populate(
      "items.product"
    );

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
