// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   items: [],
//   totalQuantity: 0,
//   totalPrice: 0,
//   isLoading: false,
//   error: null,
// };

// // Async Thunks

// // Fetch Cart
// export const fetchCart = createAsyncThunk("/cart/fetch", async () => {
//   const response = await axios.get("http://localhost:7000/api/cart", {
//     withCredentials: true,
//   });
//   return response.data;
// });

// // Add Item to Cart
// export const addItemToCart = createAsyncThunk(
//   "/cart/add",
//   async (itemData) => {
//     const response = await axios.post(
//       "http://localhost:7000/api/cart/add",
//       itemData,
//       { withCredentials: true }
//     );
//     return response.data;
//   }
// );

// // Remove Item from Cart
// export const removeItemFromCart = createAsyncThunk(
//   "/cart/remove",
//   async (itemId) => {
//     const response = await axios.delete(
//       `http://localhost:7000/api/cart/remove/${itemId}`,
//       { withCredentials: true }
//     );
//     return response.data;
//   }
// );

// // Update Item Quantity
// export const updateItemQuantity = createAsyncThunk(
//   "/cart/update",
//   async ({ itemId, quantity }) => {
//     const response = await axios.put(
//       `http://localhost:7000/api/cart/update/${itemId}`,
//       { quantity },
//       { withCredentials: true }
//     );
//     return response.data;
//   }
// );

// // Cart Slice
// const CartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch Cart
//       .addCase(fetchCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload.items;
//         state.totalQuantity = action.payload.totalQuantity;
//         state.totalPrice = action.payload.totalPrice;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })

//       // Add Item to Cart
//       .addCase(addItemToCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addItemToCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items.push(action.payload.item);
//         state.totalQuantity += action.payload.item.quantity;
//         state.totalPrice += action.payload.item.price * action.payload.item.quantity;
//       })
//       .addCase(addItemToCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })

//       // Remove Item from Cart
//       .addCase(removeItemFromCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(removeItemFromCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const removedItemId = action.payload.itemId;
//         const removedItem = state.items.find((item) => item.id === removedItemId);
//         if (removedItem) {
//           state.totalQuantity -= removedItem.quantity;
//           state.totalPrice -= removedItem.price * removedItem.quantity;
//           state.items = state.items.filter((item) => item.id !== removedItemId);
//         }
//       })
//       .addCase(removeItemFromCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       })

//       // Update Item Quantity
//       .addCase(updateItemQuantity.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateItemQuantity.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const updatedItem = action.payload.item;
//         const index = state.items.findIndex((item) => item.id === updatedItem.id);
//         if (index !== -1) {
//           const item = state.items[index];
//           state.totalQuantity += updatedItem.quantity - item.quantity;
//           state.totalPrice += (updatedItem.quantity - item.quantity) * item.price;
//           state.items[index] = updatedItem;
//         }
//       })
//       .addCase(updateItemQuantity.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearCart } = CartSlice.actions;
// export default CartSlice.reducer;
