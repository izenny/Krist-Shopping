import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../Constants/Api";
import toast from "react-hot-toast";

const initialState = {
  cart: null,
  items: [],
  subTotal: 0,
  isLoading: false,
};

// Fetch Cart
export const fetchCart = createAsyncThunk("cart/fetch", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("cart/fetchcart");
    console.log("cart", response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data || "Failed to fetch cart"
    );
  }
});

// Add to Cart
export const addToCart = createAsyncThunk(
  "cart/add",
  async (item, thunkAPI) => {
    try {
      const response = await axiosInstance.post("cart/addtocart", item);
      // toast.success("Item added to cart");
      console.log("add", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to add item"
      );
    }
  }
);

// Delete Item from Cart
export const deleteCartItem = createAsyncThunk(
  "cart/delete",
  async (itemId, thunkAPI) => {
    try {
      await axiosInstance.delete(`cart/delete/${itemId}`);
      toast.success("Item removed from cart");
      return itemId;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to delete item"
      );
    }
  }
);

// Increase Quantity
export const increaseQuantity = createAsyncThunk(
  "cart/increase",
  async (itemId, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`cart/increase/${itemId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to increase quantity"
      );
    }
  }
);

// Remove Item (Decrease Quantity)
export const removeItem = createAsyncThunk(
  "cart/remove",
  async (itemId, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`cart/decrease/${itemId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to remove item"
      );
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload?.cart?.id;
        state.items = action.payload?.cart.items;
        state.subTotal = action.payload?.cart.subTotal;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        // state.cart = [];
        toast.error(action.payload.message);
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart.id;
        state.items = action.payload.cart.items;
        state.subTotal = action.payload.cart.subTotal;
        state.isLoading = false;
        toast.success("Product added to cart successfully!");
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        // state.cart = [];
        toast.error(action.payload.message);
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload.id);
        if (item) {
          item.quantity = action.payload.quantity;
          if (item.quantity === 0) {
            state.cart = state.cart.filter((i) => i.id !== item.id);
          }
        }
      });
  },
});

export default CartSlice.reducer;
