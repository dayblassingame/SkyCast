import Image from "next/image";
import React from "react";
import styles from "./styles/weeklyForecastItem.module.scss";

export default function WeeklyForecastItem({ data, index }) {
  const itemDay = new Date(data.date).getUTCDay();
  const day = index == 0 ? "today" : getDayOfWeek(itemDay);

  const iconSrc = "https:" + data.icon;
  return (
    <li className={styles.container}>
      <p className={styles.day}>{day}</p>
      <span className={styles.conditionSpan}>
        <img alt="condition" name="condition" src={iconSrc} />
        <h4>{data.iconText}</h4>
      </span>
      <span className={styles.tempSpan}>
        <h4>{data.max}</h4>
        <p>/{data.min}</p>
      </span>
    </li>
  );
}

const getDayOfWeek = (num) => {
  let day = "";
  switch (num) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thursday";
      break;
    case 5:
      day = "friday";
      break;
    case 6:
      day = "saturday";
      break;
  }
  return day;
};
