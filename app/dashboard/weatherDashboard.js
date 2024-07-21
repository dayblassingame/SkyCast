"use client";

import React, { useEffect, useState } from "react";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import AirConditions from "./components/airConditions";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/weatherDashboard.module.scss";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { loadCurrent } from "../lib/localStorage";
import { fetchCityWeather } from "./api/fetchCityWeather";
import { setWeather } from "../lib/weatherSlice";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

//displays full weather information about current city set
export default function WeatherDashboard() {
  const dispatch = useAppDispatch();
  const current = {
    //gets current weather conditions from store
    city: useAppSelector((state) => state.weather.city),
    region: useAppSelector((state) => state.weather.region),
    currentWeather: useAppSelector((state) => state.weather.currentWeather),
  };

  const airConditions = useAppSelector((state) => state.weather.airConditions); //get air conditions from store
  const weeklyForecast = useAppSelector(
    (state) => state.weather.weeklyForecast
  ); //get weekly forecast from store
  const dailyForecast = useAppSelector((state) => state.weather.dailyForecast);
  const [error, setError] = useState(current.city == "");

  useEffect(() => {
    setError(current.city == "");
  }, [current.city]);

  useEffect(() => {
    let currentCity = loadCurrent();
    if (currentCity !== null && currentCity != "") {
      fetchCityWeather(currentCity.id, apiKey)
        .then((res) => dispatch(setWeather(res)))
        .catch((err) => setError(true));
    }
  }, []);

  return !error ? (
    <div id="weatherDashboard" className={styles.container}>
      <div className={styles.left}>
        <CurrentWeather data={current} />
        <DailyForecast data={dailyForecast} />
        <AirConditions data={airConditions} />
      </div>
      <div className={styles.right}>
        <WeeklyForecast data={weeklyForecast} />
      </div>
    </div>
  ) : (
    <div className={styles.error}>
      <p>Search for a city</p>
    </div>
  );
}
