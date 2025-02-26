const { createOrder, getOrdersByUser } = require("../Controllers/OrderController");
const { VerifyToken } = require("../Middlewares/VerifyToken");

const router = require("express").Router();

router.post("/placeorder", VerifyToken, createOrder);
router.get("/view", VerifyToken, getOrdersByUser);

module.exports = router;
