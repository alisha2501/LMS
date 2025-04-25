import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"; // Adjusted path
import { authApi } from "../features/api/authApi.js"; // .js extension not needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer, // Added API reducer
  },
  middleware: (getDefaultMiddleware) => // Correct middleware function name
    getDefaultMiddleware().concat(authApi.middleware),
});