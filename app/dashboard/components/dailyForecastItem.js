import React from "react";
import Image from "next/image";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/dailyForecastItem.module.scss";

export default function DailyForecastItem({ data }) {
  const time = getStandardHour(new Date(data.time).getUTCHours());
  const iconSrc = "https:" + data.icon;

  return (
    <li className={styles.container}>
      <p>
        {time.hour}:00 {time.suffix}
      </p>
      <img
        alt=""
        className={styles.condition}
        name={data.iconText}
        src={iconSrc}
      />
      <span className={styles.temp}>
        <h3>{data.temp} </h3> <PiCircleBold className={styles.icon} />{" "}
      </span>
    </li>
  );
}

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
