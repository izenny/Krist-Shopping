const { createOrder } = require("../Controllers/OrderController");
const { VerifyToken } = require("../Middlewares/VerifyToken");

const router = require("express").Router();

router.post("/placeorder", VerifyToken, createOrder);

module.exports = router;
