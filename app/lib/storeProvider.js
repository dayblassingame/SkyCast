"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { weatherStore } from "./weatherStore";

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = weatherStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
