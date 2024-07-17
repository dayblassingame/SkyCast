import React from "react";
import DailyForecastItem from "./dailyForecastItem";
import styles from "./styles/dailyForecast.module.scss";

export default function DailyForecast({ backgroundColor, data }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <label>{"Today's Forecast"}</label>
      <ul>
        {data.map((item, index) => (
          <DailyForecastItem data={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
