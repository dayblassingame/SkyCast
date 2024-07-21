import React from "react";
import DailyForecastItem from "./dailyForecastItem";
import styles from "./styles/dailyForecast.module.scss";

export default function DailyForecast({ backgroundColor, data }) {
  //data: hourly forecast info from store
  return (
    <section
      aria-label="hourly forecast"
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <label>{"Today's Forecast"}</label>
      <ul>
        {data.map((item, index) => (
          <DailyForecastItem data={item} key={index} />
        ))}
      </ul>
    </section>
  );
}
