const {
  getAllProducts,
  getProductById,
} = require("../Controllers/ProductController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
module.exports = router;
