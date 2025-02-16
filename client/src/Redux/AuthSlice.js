import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../Constants/Api";
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// Register User
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/register", formData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Registration failed. Try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/login", formData);

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// OTP Verification
export const OtpVerifyUser = createAsyncThunk(
  "/auth/otpverify",
  async (otp, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/verify-email", { otp });
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "OTP verification failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Authentication Check
export const authCheck = createAsyncThunk(
  "/auth/checkauth",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("auth/check-auth");
      // console.log("auth", response.data);

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Authentication check failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk(
  "/auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/logout");
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message || "Logout failed. Try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);


const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        toast.success("Account created successfully! verify your email");
      })
      .addCase(registerUser.rejected, (state,action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        toast.error(action.payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user;
        state.isAuthenticated = true;
        toast.success("Login successful!");
      })
      .addCase(loginUser.rejected, (state,action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        toast.error(action.payload);
      })
      .addCase(OtpVerifyUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(OtpVerifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        toast.success("Email verified successfully!");
      })
      .addCase(OtpVerifyUser.rejected, (state,action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        toast.error(action.payload);
      })
      .addCase(authCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(authCheck.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        toast.success("Logout successful!");
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
