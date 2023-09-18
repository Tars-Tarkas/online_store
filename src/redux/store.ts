import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createWrapper from "next-redux-wrapper";
import OSSlice from "./OSSlice";
export const store = configureStore({
  reducer: {
    OS: OSSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// export const wrapper = createWrapper(store, { debug: true });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
