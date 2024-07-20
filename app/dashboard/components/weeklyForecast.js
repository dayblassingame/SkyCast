import React from "react";
import WeeklyForecastItem from "./weeklyForecastItem";
import styles from "./styles/weeklyForecast.module.scss";

export default function WeeklyForecast({ backgroundColor, data }) {
  //data: weekly forecast from store
  return (
    <section
      aria-label="weekly forecast"
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <label>{data.length}-Day Forecast</label>
      <ul>
        {data.map((item, index) => (
          <WeeklyForecastItem data={item} index={index} key={index} />
        ))}
      </ul>
    </section>
  );
}
