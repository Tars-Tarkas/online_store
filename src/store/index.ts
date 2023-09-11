import { configureStore } from "@reduxjs/toolkit";
import OSSlice from "./OSSlice";

export const store = configureStore({
  reducer: {
    OS: OSSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
