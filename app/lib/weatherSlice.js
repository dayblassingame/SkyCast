import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    id: "",
    city: "",
    region: "",
    date: "",
    currentWeather: {
      precipitationAmount: "",
      temperature: "",
      icon: "",
    },
    weeklyForecast: [],
    dailyForecast: [],
    searchHistory: [],
    airConditions: {
      realFeel: "",
      windSpeed: "",
      humidity: "",
      uvIndex: "",
    },
  },
  reducers: {
    setWeather: (state = initialState, action) => {
      const newCity = action.payload.id;
      state.id = newCity;
      state.city = action.payload.city;
      state.region = action.payload.region;
      state.currentWeather = action.payload.currentWeather;
      state.weeklyForecast = action.payload.weeklyForecast;
      state.dailyForecast = action.payload.dailyForecast;
      state.airConditions = action.payload.airConditions;
      if (!state.searchHistory.includes(newCity)) {
        state.searchHistory.push(newCity); // Add new city to search history
      }
    },
    deleteCity: (state, action) => {
      state.searchHistory.filter((item) => item.id != action.id); // Action to delete a city
    },
  },
});

export const { setWeather, deleteCity } = weatherSlice.actions;
export default weatherSlice.reducer;
