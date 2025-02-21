const Cart = require("../Models/CartSchema");
const Product = require("../Models/ProductSchema");

// Create cart
exports.createCart = async (req, res) => {
  const { product, name, price, quantity, color, size } = req.body;
  const user = req.user._id;

  // Validate the inputs
  if (
    !user ||
    !product ||
    !price ||
    !quantity ||
    quantity < 1 ||
    !color ||
    !size
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }

  // Enforce max quantity limit of 5
  if (quantity > 5) {
    return res
      .status(400)
      .json({ success: false, message: "Maximum quantity allowed is 5" });
  }

  try {
    // Check if the product exists
    const productData = await Product.findById(product);
    if (!productData) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Validate color and size in the product stock
    const stockItem = productData.stock.find(
      (item) => item.size === size && item.color === color
    );
    if (!stockItem || stockItem.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock for the selected size and color",
      });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ user });

    // If the user doesn't have a cart, create a new one
    if (!cart) {
      cart = new Cart({
        user,
        items: [
          {
            product,
            name,
            color,
            size,
            quantity,
            price,
            total: price * quantity,
            image: productData.images[0].url,
          },
        ],
      });
    } else {
      // Check if the product already exists in the cart with the same size and color
      const itemIndex = cart.items.findIndex(
        (item) =>
          item.product == product && item.color === color && item.size === size
      );

      if (itemIndex > -1) {
        // Ensure that the quantity doesn't exceed 5
        const newQuantity = cart.items[itemIndex].quantity + quantity;
        if (newQuantity > 5) {
          return res
            .status(400)
            .json({ success: false, message: "Maximum quantity allowed is 5" });
        }
        // Update the existing product in the cart
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].total = cart.items[itemIndex].quantity * price;
      } else {
        // Add new product to the cart, respecting the max quantity limit
        if (quantity > 5) {
          return res
            .status(400)
            .json({ success: false, message: "Maximum quantity allowed is 5" });
        }
        // cart.items.push({
        //   product,
        //   name,
        //   color,
        //   size,
        //   quantity,
        //   price,
        //   total: price * quantity,
        // });
        cart.items.push({
          product,
          name,
          color,
          size,
          quantity,
          price,
          total: price * quantity,
          image: productData.images[0].url, // ✅ Add product image here
        });
      }
    }

    // Calculate the subtotal
    cart.subTotal = cart.items.reduce((acc, item) => acc + item.total, 0);

    // Save the cart to the database
    await cart.save();

    // Return the updated cart
    res.status(201).json({ success: true, message: "Cart updated", cart });
  } catch (error) {
    console.error("Error in createCart:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// update quantity of cart items

exports.updateCart = async (req, res) => {
  const { user, product, quantity, color, size } = req.body;
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

// Fetch cart with stock validation and return errors along with cart
exports.getCartItems = async (req, res) => {
  const user = req.user._id;

  try {
    // Fetch the user's cart
    const cart = await Cart.findOne({ user }).populate("items.product");

    if (!cart) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Cart not found",
          cart: { items: [], subTotal: 0 },
        });
    }

    // Initialize an array to collect any stock errors
    let stockErrors = [];

    // Initialize a new array to format the cart data to send back
    let cartItems = [];

    // Check stock for each item in the cart
    for (let item of cart.items) {
      const product = item.product;

      // Find the matching stock entry for the color and size
      const stockItem = product.stock.find(
        (stock) => stock.color === item.color && stock.size === item.size
      );

      // If stock is insufficient, log the error
      if (!stockItem || stockItem.quantity < item.quantity) {
        stockErrors.push({
          product: product._id,
          color: item.color,
          size: item.size,
          available: stockItem ? stockItem.quantity : 0,
          requested: item.quantity,
        });
      }

      // Push the item data into the formatted cartItems array
      cartItems.push({
        product: product._id,
        name: product.name,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: item.price,
        total: item.total,
        image: item.image 
      });
    }

    // Return the cart and any stock errors in the response
    if (stockErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Some items in your cart have insufficient stock",
        cart: {
          id: cart._id, // Returning the cart ID
          items: cartItems, // Send the formatted cart items
          subTotal: cart.subTotal,
        },
        stockErrors, // Include the stock errors
      });
    }

    // If no stock issues, return the cart normally
    res.status(200).json({
      success: true,
      cart: {
        id: cart._id, // Returning the cart ID
        items: cartItems,
        subTotal: cart.subTotal,
      },
      message: "Cart fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching cart:", error.message);
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
