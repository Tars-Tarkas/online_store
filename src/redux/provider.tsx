"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { AppProps } from "next/app";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
