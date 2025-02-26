const { createCart, getCartItems, updateCart, deleteCartItem } = require("../Controllers/CartController");
const { VerifyToken } = require("../Middlewares/VerifyToken");

const router = require("express").Router();

router.post("/addtocart", VerifyToken, createCart);
router.get("/fetchcart", VerifyToken, getCartItems);
router.patch('/update',VerifyToken,updateCart)
router.delete('/remove',VerifyToken,deleteCartItem)

module.exports = router;
