"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { weatherStore } from "./weatherStore";

export default function StoreProvider({ children }) {
  return <Provider store={weatherStore()}>{children}</Provider>;
}
