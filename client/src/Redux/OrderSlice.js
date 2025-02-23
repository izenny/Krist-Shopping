import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  address: null,
  paymentMethod: null,
  orderItems: [],
  totalPrice: 0,
  loading: false,
  error: null,
  success: false,
};

// export const PlaceOrder = createAsyncThunk('order/placeorder',async(createStaticHandler,orderData)=>{
//  try {
//     const response = await axiosInstance.get("order/placeorder");
//     console.log("cart", response.data);

//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(
//       error.response?.data || "Failed to fetch cart"
//     );
//   }
// })

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setOrderItems: (state, action) => {
      state.orderItems = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    resetOrder: (state) => {
      return initialState; // Reset order after successful checkout
    },
    orderRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    orderSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    orderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setAddress,
  setPaymentMethod,
  setOrderItems,
  resetOrder,
  orderRequest,
  orderSuccess,
  orderFail,
} = orderSlice.actions;

export default orderSlice.reducer;
