import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./locationSlice"; 

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
