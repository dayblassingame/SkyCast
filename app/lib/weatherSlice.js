import { createSlice } from "@reduxjs/toolkit";
import { loadCities, saveCities } from "./localStorage";

const storedData = loadCities();
const storedIds = storedData.map((item) => item.id);

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
    searchHistoryIds: [...storedIds],
    searchHistoryData: [...storedData],
    airConditions: {
      realFeel: "",
      windSpeed: "",
      humidity: "",
      uvIndex: "",
    },
  },
  reducers: {
    setWeather: (state, action) => {
      const newCity = action.payload.id;
      if (newCity == "" || state.id == newCity) return;
      state.id = newCity;
      state.city = action.payload.city;
      state.region = action.payload.region;
      state.currentWeather = action.payload.currentWeather;
      state.weeklyForecast = action.payload.weeklyForecast;
      state.dailyForecast = action.payload.dailyForecast;
      state.airConditions = action.payload.airConditions;

      if (!state.searchHistoryIds.includes(newCity)) {
        state.searchHistoryIds.push(newCity);
        state.searchHistoryData.push({
          id: newCity,
          city: state.city,
          region: state.region,
          temp: state.currentWeather.temperature,
          icon: state.currentWeather.icon,
        });
        saveCities(state.searchHistoryData);
      } else {
        const index = state.searchHistoryIds.findIndex(
          (item) => item == newCity
        );
        state.searchHistoryData[index] = {
          ...state.searchHistoryData[index],
          temp: state.currentWeather.temperature,
        };
        state.searchHistoryData[index] = {
          ...state.searchHistoryData[index],
          icon: state.currentWeather.icon,
        };
      }
    },
    deleteCity: (state, action) => {
      // Action to delete a city
      state.searchHistoryIds.filter((item) => item == action.payload.id);
      state.searchHistoryData.filter((item) => item.id == action.payload.id); // Action to delete a city
    },
  },
});

export const { setWeather, deleteCity } = weatherSlice.actions;
export default weatherSlice.reducer;
