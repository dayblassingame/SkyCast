import React from "react";
import WeeklyForecastItem from "./weeklyForecastItem";
import styles from "./styles/weeklyForecast.module.scss";

export default function WeeklyForecast({ backgroundColor, data }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <label>6-Day Forecast</label>
      <ul>
        {data.map((item, index) => (
          <WeeklyForecastItem data={item} index={index} />
        ))}
      </ul>
    </div>
  );
}
