const Product = require("../Models/ProductSchema");
const User = require("../Models/UserSchema");
// create product

exports.createProduct = async (req, res) => {
  const { name,title, description, price,orginalprice, category, stock, images, offer, discount } =
    req.body;
  try {
    const newProduct = new Product({
      name,
      title,
      description,
      price,
      orginalprice,
      category,
      stock,
      images,
      offer,
      discount,
    });

    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error in createProduct:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get all products

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getAllProducts:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get product by id

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("Error in getProductById:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//update product

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, stock, images, offer, discount } =
    req.body;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.stock = stock;
    product.images = images;
    product.offer = offer;
    product.discount = discount;
    await product.save();
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error in updateProduct:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//delete product

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in deleteProduct:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get products by category

exports.getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProductsByCategory:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get products by price range

exports.getProductsByPriceRange = async (req, res) => {
  const { min, max } = req.params;
  try {
    const products = await Product.find({ price: { $gte: min, $lte: max } });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProductsByPriceRange:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get products by rating

exports.getProductsByRating = async (req, res) => {
  const { rating } = req.params;
  try {
    const products = await Product.find({ ratings: rating });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProductsByRating:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get products by discount

exports.getProductsByDiscount = async (req, res) => {
  const { discount } = req.params;
  try {
    const products = await Product.find({ discount });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProductsByDiscount:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//get products by offer

exports.getProductsByOffer = async (req, res) => {
  const { offer } = req.params;
  try {
    const products = await Product.find({ offer });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in getProductsByOffer:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// add review to product

exports.addReview = async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const user = User.findById(req.user.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const review = { user: user._id, rating, comment };
    product.reviews.push(review);
    product.ratings =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res
      .status(200)
      .json({ success: true, message: "Review added successfully", product });
  } catch (error) {
    console.error("Error in addReview:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Add stock to product
exports.addStock = async (req, res) => {
  const { id } = req.params;
  const { size, color, quantity } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Validate quantity
    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive number",
      });
    }

    // Check if stock with the same size and color already exists
    const existingStock = product.stock.find(
      (stockItem) => stockItem.size === size && stockItem.color === color
    );

    if (existingStock) {
      // Update quantity if stock exists
      existingStock.quantity += quantity;
    } else {
      // Add new stock entry if it doesn't exist
      const stock = { size, color, quantity };
      product.stock.push(stock);
    }

    // Save the updated product
    await product.save();

    res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error in addStock:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//search products

exports.searchProducts = async (req, res) => {
  const { query } = req.params;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error in searchProducts:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Filter products based on multiple criteria
exports.filterProducts = async (req, res) => {
    const { category, minPrice, maxPrice, minRating, maxRating, minDiscount, maxDiscount, offer } = req.query;
  
    try {
      // Build dynamic filter object
      const filters = {};
  
      if (category) {
        filters.category = category;
      }
  
      if (minPrice || maxPrice) {
        filters.price = {};
        if (minPrice) filters.price.$gte = parseFloat(minPrice);
        if (maxPrice) filters.price.$lte = parseFloat(maxPrice);
      }
  
      if (minRating || maxRating) {
        filters.ratings = {};
        if (minRating) filters.ratings.$gte = parseFloat(minRating);
        if (maxRating) filters.ratings.$lte = parseFloat(maxRating);
      }
  
      if (minDiscount || maxDiscount) {
        filters.discount = {};
        if (minDiscount) filters.discount.$gte = parseFloat(minDiscount);
        if (maxDiscount) filters.discount.$lte = parseFloat(maxDiscount);
      }
  
      if (offer) {
        filters.offer = { $regex: offer, $options: "i" }; // Case-insensitive matching for offer
      }
  
      // Query the database with filters
      const products = await Product.find(filters);
  
      res.status(200).json({ success: true, products });
    } catch (error) {
      console.error("Error in filterProducts:", error.message);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  