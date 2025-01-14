const WhishList = require('../Models/WhishlistSchema');

// Add a product to the wishlist

exports.addToWishlist = async (req, res) => {
    const { product } = req.body;
    const { user } = req.params;
    
    try {
        const wishlist = await WhishList.findOne({ user });
    
        if (wishlist) {
        wishlist.items.push({ product });
        await wishlist.save();
        return res.status(201).json({ message: "Product added to wishlist" });
        } else {
        const newWishlist = new WhishList({
            user,
            items: [{ product }],
        });
        await newWishlist.save();
        return res.status(201).json({ message: "Product added to wishlist" });
        }
    } catch (error) {
        console.error("Error adding product to wishlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get all wishlist items

exports.getWishlist = async (req, res) => {
    const { user } = req.params;
    try {
        const wishlist = await WhishList.findOne({ user }).populate("items.product");
        if (!wishlist) {
        return res.status(404).json({ message: "Wishlist is empty" });
        }
        return res.status(200).json({ wishlist });
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Remove a product from the wishlist

exports.removeFromWishlist = async (req, res) => {
    const { user, productId } = req.params;
    try {
        const wishlist = await WhishList.findOne({ user });
        if (!wishlist) {
        return res.status(404).json({ message: "Wishlist is empty" });
        }
        wishlist.items = wishlist.items.filter((item) => item.product != productId);
        await wishlist.save();
        return res.status(200).json({ message: "Product removed from wishlist" });
    }
    catch (error) {
        console.error("Error removing product from wishlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Clear the wishlist

exports.clearWishlist = async (req, res) => {
    const { user } = req.params;
    try {
        const wishlist = await WhishList.findOne({ user });
        if (!wishlist) {
        return res.status(404).json({ message: "Wishlist is empty" });
        }
        wishlist.items = [];
        await wishlist.save();
        return res.status(200).json({ message: "Wishlist cleared" });
    } catch (error) {
        console.error("Error clearing wishlist:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

