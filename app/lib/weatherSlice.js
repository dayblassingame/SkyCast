import { createSlice } from "@reduxjs/toolkit";
import {
  loadCities,
  loadCurrent,
  saveCities,
  saveCurrent,
} from "./localStorage";

const storedData = loadCities(); //get data from local storage
const storedIds = storedData.map((item) => item.id); //get city ids from local storage
const loadCurrentCity = loadCurrent();

let initialState = {};
if (loadCurrentCity == null) {
  initialState = {
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
  };
} else {
  initialState = { ...loadCurrentCity };
}

//holds and manipulates weather data
export const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
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

      saveCurrent({
        id: state.id,
        city: state.city,
        region: state.region,
        currentWeather: { ...state.currentWeather },
        weeklyForecast: [...state.weeklyForecast],
        dailyForecast: [...state.dailyForecast],
        airConditions: { ...state.airConditions },
      });

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
      state.searchHistoryIds = state.searchHistoryIds.filter(
        (city) => city != action.payload.id
      );
      state.searchHistoryData = state.searchHistoryData.filter(
        (city) => city.id != action.payload.id
      );
      saveCities(state.searchHistoryData);
    },
  },
});

export const { setWeather, deleteCity } = weatherSlice.actions;
export default weatherSlice.reducer;
