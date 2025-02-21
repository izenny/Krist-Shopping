import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; 
import cartSlicer from "./CartSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart:cartSlicer
  },
});

export default store;
