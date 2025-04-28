import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"; // Adjusted path
import { authApi } from "../features/api/authApi.js"; // .js extension not needed
import { courseApi } from "../features/api/courseApi.js";

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer, // Added API reducer
  },
  middleware: (getDefaultMiddleware) => // Correct middleware function name
    getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware),
});

const initializeApp = async () => {
  await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();