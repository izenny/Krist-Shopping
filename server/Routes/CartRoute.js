const { createCart, getCartItems } = require("../Controllers/CartController");
const { VerifyToken } = require("../Middlewares/VerifyToken");

const router = require("express").Router();

router.post("/addtocart", VerifyToken, createCart);
router.get("/fetchcart", VerifyToken, getCartItems);

module.exports = router;
