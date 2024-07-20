import React from "react";
import Image from "next/image";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/dailyForecastItem.module.scss";

export default function DailyForecastItem({ data }) {
  //data: daily forecast data from store
  const time = getStandardHour(new Date(data.time).getUTCHours()); //gets hour from data and converts it to standard time
  const iconSrc = "https:" + data.icon; //convert icon path to full url

  return (
    <li
      className={styles.container}
      title={`forecast at ${time.hour} ${time.suffix}`}
    >
      <p aria-label="time">
        {time.hour}:00 {time.suffix}
      </p>
      <img
        title={data.iconText}
        alt={data.iconText}
        className={styles.condition}
        name={data.iconText}
        src={iconSrc}
      />
      <span aria-label="temperture" className={styles.temp}>
        <h3>{data.temp} </h3>{" "}
        <PiCircleBold className={styles.icon} aria-label="degrees" />{" "}
      </span>
    </li>
  );
}

//converts military time to standard time
const getStandardHour = (hour) => {
  if (hour == 0) {
    return {
      hour: 12,
      suffix: "AM",
    };
  } else if (hour > 12) {
    return {
      hour: hour - 12,
      suffix: "PM",
    };
  } else if (hour == 12) {
    return {
      hour: hour,
      suffix: "PM",
    };
  } else {
    return {
      hour: hour,
      suffix: "AM",
    };
  }
};
