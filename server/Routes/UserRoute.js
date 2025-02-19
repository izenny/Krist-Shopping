const { createAddress, getAddresses, deleteAddress } = require("../Controllers/AddressController");
const { getUserById, updateUserById } = require("../Controllers/UserController");
const { VerifyToken } = require("../Middlewares/VerifyToken");
const { create } = require("../Models/AddressSchema");

const router = require("express").Router();

router.get("/userdata",VerifyToken, getUserById)
router.post("/update",VerifyToken, updateUserById)
router.post("/createaddress",VerifyToken, createAddress)
router.get("/address",VerifyToken, getAddresses)
router.delete("/deleteaddress/:address",VerifyToken,deleteAddress)
module.exports = router;