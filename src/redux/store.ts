import { configureStore } from "@reduxjs/toolkit";
import OSSlice from "./OSSlice";

export const store = configureStore({
  reducer: {
    OS: OSSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
