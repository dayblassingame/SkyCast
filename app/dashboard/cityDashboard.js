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

export default function CityDashboard({ setDash }) {
  const dispatch = useAppDispatch();
  const cityList = useAppSelector((state) => state.weather.searchHistoryData);
  const [empty, setEmpty] = useState(cityList.length == 0);
  const [error, setError] = useState(
    useAppSelector((state) => state.weather.city == "")
  );

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

  useEffect(() => {
    setEmpty(cityList.length == 0);
  }, [cityList.length]);

  async function setCurrentCity(e) {
    fetchCityWeather(e, apiKey)
      .then((res) => dispatch(setWeather(res), setError(false)))
      .catch((err) => setError(true));
  }

  const cityDoubleClick = (e) => {
    setCurrentCity(e);
    setDash({ city: false, weather: true });
  };

  const removeCity = (e) => {
    dispatch(deleteCity({ id: e }));
  };

  return !empty ? (
    <div id="cityDashboard" className={styles.container}>
      <ul className={styles.left}>
        {cityList.map((cityData) => (
          <div className={styles.cityDiv}>
            <City
              key={cityData.id}
              data={cityData}
              setCity={setCurrentCity}
              doubleClick={cityDoubleClick}
            />
            <button
              className={styles.delete}
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
    <div className={styles.error}>
      <p>Search for a city</p>
    </div>
  );
}
