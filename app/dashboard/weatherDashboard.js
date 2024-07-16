"use client";

import React from "react";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import AirConditions from "./components/airConditions";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/weatherDashboard.module.scss";

import { useAppSelector } from "../lib/hooks";

export default function WeatherDashboard() {
  const current = {
    city: useAppSelector((state) => state.weather.city),
    region: useAppSelector((state) => state.weather.region),
    currentWeather: useAppSelector((state) => state.weather.currentWeather),
  };

  const airConditions = useAppSelector((state) => state.weather.airConditions);
  const today = useAppSelector((state) => state.weather.date);
  const weeklyForecast = useAppSelector(
    (state) => state.weather.weeklyForecast
  );

  const dailyForecast = useAppSelector((state) => state.weather.dailyForecast);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CurrentWeather data={current} />
        <DailyForecast data={dailyForecast} />
        <AirConditions data={airConditions} />
      </div>
      <div className={styles.right}>
        <WeeklyForecast data={weeklyForecast} today={today} />
      </div>
    </div>
  );
}
