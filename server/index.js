const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const AuthRoutes = require("./Routes/AuthRoute");
const UserRoutes = require("./Routes/UserRoute");
const ProductsRoutes = require("./Routes/ProductsRoute");
const CartRoutes = require("./Routes/CartRoute");
const OrderRoutes = require("./Routes/OrderRoute");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Must match frontend URL
    credentials: true,  // REQUIRED for cookies
    methods: ["GET", "POST", "PUT","PATCH", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/products", ProductsRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/order",OrderRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));
