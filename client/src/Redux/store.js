import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import cartSlicer from "./CartSlice";
import orderReducer from "./OrderSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlicer,
    order: orderReducer,
  },
});

export default store;
