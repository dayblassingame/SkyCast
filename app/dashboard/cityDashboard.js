"use client";
import React, { useEffect, useState } from "react";
import City from "./components/city";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/cityDashboard.module.scss";
import { fetchCityWeather } from "./api/fetchCityWeather";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { deleteCity, setWeather } from "../lib/weatherSlice";
import { IoTrashOutline } from "react-icons/io5";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

//city dashboard displays list of cities and partial forecast
export default function CityDashboard({ setDash }) {
  const dispatch = useAppDispatch();
  const cityList = useAppSelector((state) => state.weather.searchHistoryData); //list of previously searched cities
  const [empty, setEmpty] = useState(cityList.length == 0); //checks if search history list is empty
  const [error, setError] = useState(
    useAppSelector((state) => state.weather.city == "") //checks if current city is set
  );

  const current = {
    city: useAppSelector((state) => state.weather.city),
    region: useAppSelector((state) => state.weather.region),
    currentWeather: useAppSelector((state) => state.weather.currentWeather),
  }; //get city current weather information

  const weeklyForecast = useAppSelector(
    (state) => state.weather.weeklyForecast
  ).slice(0, 2); //gets 2 day weekly forecast

  const dailyForecast = useAppSelector(
    (state) => state.weather.dailyForecast
  ).slice(0, 4); //gets partial daily forecast

  useEffect(() => {
    setEmpty(cityList.length == 0);
  }, [cityList.length]);

  useEffect(() => {
    setError(current.city == "");
  }, [current.city]);

  async function setCurrentCity(e) {
    //fetches weather information for city using id
    window.scrollTo(0, 0);
    fetchCityWeather(e, apiKey)
      .then((res) => dispatch(setWeather(res), setError(false))) //sets current city in redux store
      .catch((err) => setError(true));
  }

  const cityDoubleClick = (e) => {
    setCurrentCity(e);
    setDash({ city: false, weather: true }); //displays current city in weather dashboard
  };

  const removeCity = (e) => {
    //delete cities from search history
    dispatch(deleteCity({ id: e }));
  };

  return !empty ? (
    <div
      aria-label="city dashboard"
      id="cityDashboard"
      className={styles.container}
    >
      <ul className={styles.left} aria-label="search history">
        {cityList.map((cityData, index) => (
          <div className={styles.cityDiv} key={index}>
            <City
              key={cityData.id}
              data={cityData}
              setCity={setCurrentCity}
              doubleClick={cityDoubleClick}
            />
            <button
              role="button"
              aria-label={`delete ${cityData.city}`}
              title={"delete"}
              className={styles.delete}
              key={index}
              onClick={() => removeCity(cityData.id)}
            >
              <IoTrashOutline className={styles.icon} />
            </button>
          </div>
        ))}
      </ul>

      {!error && (
        <div className={styles.right}>
          <CurrentWeather data={current} />
          <DailyForecast backgroundColor={"transparent"} data={dailyForecast} />
          <WeeklyForecast
            backgroundColor={"transparent"}
            data={weeklyForecast}
          />
        </div>
      )}
    </div>
  ) : (
    //if no city is selected display message to search for city
    <div className={styles.error}>
      <p>Search for a city</p>
    </div>
  );
}
