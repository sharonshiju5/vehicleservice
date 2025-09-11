import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./locationSlice"; 
import acceptedRequestReducer from "./acceptedRequestSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    acceptedRequest: acceptedRequestReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
