import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

export const weatherStore = () => {
  return configureStore({
    reducer: {
      weather: weatherReducer,
    },
  });
};
