"use client";
import React, { useEffect, useState } from "react";
import City from "./components/city";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/cityDashboard.module.scss";
import { fetchCityWeather } from "./api/fetchCityWeather";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { setWeather } from "../lib/weatherSlice";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function CityDashboard({ setDash }) {
  const dispatch = useAppDispatch();
  const cityList = useAppSelector((state) => state.weather.searchHistoryData);
  const [error, setError] = useState(cityList.length == 0);

  useEffect(() => {
    setError(cityList.length == 0);
  });

  async function setCurrentCity(e) {
    fetchCityWeather(e.target.id, apiKey)
      .then((res) => dispatch(setWeather(res)))
      .catch((err) => setError(true));
  }

  const cityDoubleClick = (e) => {
    setCurrentCity(e);
    setDash({ city: false, weather: true });
  };

  const current = {
    city: useAppSelector((state) => state.weather.city),
    region: useAppSelector((state) => state.weather.region),
    currentWeather: useAppSelector((state) => state.weather.currentWeather),
  };

  const weeklyForecast = useAppSelector(
    (state) => state.weather.weeklyForecast
  ).slice(0, 2);

  const dailyForecast = useAppSelector(
    (state) => state.weather.dailyForecast
  ).slice(0, 4);

  return !error ? (
    <div className={styles.container}>
      <ul className={styles.left}>
        {cityList.map((cityData) => (
          <City
            key={cityData.id}
            data={cityData}
            setCity={setCurrentCity}
            doubleClick={cityDoubleClick}
          />
        ))}
      </ul>
      <div className={styles.right}>
        <CurrentWeather data={current} />
        <DailyForecast backgroundColor={"transparent"} data={dailyForecast} />
        <WeeklyForecast backgroundColor={"transparent"} data={weeklyForecast} />
      </div>
    </div>
  ) : (
    <div className={styles.error}>
      <p>Search for a city</p>
    </div>
  );
}
