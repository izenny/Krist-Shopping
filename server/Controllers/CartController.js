const Cart = require("../Models/CartSchema");
const Product = require("../Models/ProductSchema");

// create cart

exports.createCart = async (req, res) => {
  const { user, product, price, quantity } = req.body;
  if (!user || !product || !price || !quantity || quantity < 1) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }
  try {
    const productData = await Product.findById(product);
    if (!productData) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const cart = await Cart.findOne({ user });
    if (!cart) {
      const newCart = new Cart({
        user,
        items: [{ product, quantity, price, total: price * quantity }],
      });
    } else {
      //check if product already exists in cart
      const itemIndex = cart.items.findIndex((item) => item.product == product);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].total = cart.items[itemIndex].quantity * price;
      } else {
        cart.items.push({ product, quantity, price, total: price * quantity });
      }
    }

    // Calculate subtotal of the items in the cart
    cart.subTotal = cart.items.reduce((acc, item) => acc + item.total, 0);
    await cart.save();
    res.status(201).json({ success: true, message: "Cart created", cart });
  } catch (error) {
    console.error("Error in createCart:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// update quantity of cart items

exports.updateCart = async (req, res) => {
  const { user, product, quantity } = req.body;
  if (!user || !product || !quantity || quantity < 1) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }
  try {
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex((item) => item.product == product);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      cart.items[itemIndex].total =
        cart.items[itemIndex].quantity * cart.items[itemIndex].price;
      cart.subTotal = cart.items.reduce((acc, item) => acc + item.total, 0);
      await cart.save();
      res.status(200).json({ success: true, message: "Cart updated", cart });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.error("Error in updateCart:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//remove item from cart

exports.removeItem = async (req, res) => {
  const { user, product } = req.body;
  if (!user || !product) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }
  try {
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex((item) => item.product == product);
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      cart.subTotal = cart.items.reduce((acc, item) => acc + item.total, 0);
      await cart.save();
      res.status(200).json({ success: true, message: "Item removed", cart });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.error("Error in removeItem:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get cart items

exports.getCartItems = async (req, res) => {
  const { user } = req.body;
  try {
    const cart = await Cart.findOne({ user }).populate("items.product");
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error("Error in getCartItems:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Clear cart

exports.clearCart = async (req, res) => {
  const { user } = req.body;
  try {
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }
    cart.items = [];
    cart.subTotal = 0;
    await cart.save();
    res.status(200).json({ success: true, message: "Cart cleared" });
  } catch (error) {
    console.error("Error in clearCart:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// count total items in cart

exports.getCartItemsCount = async (req, res) => {
  const { user } = req.body;
  try {
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    }

    // Count the number of unique items in the cart
    const count = cart.items.length;

    res.status(200).json({ success: true, count });
  } catch (error) {
    console.error("Error in getCartItemsCount:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
