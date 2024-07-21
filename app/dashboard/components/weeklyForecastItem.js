import Image from "next/image";
import React from "react";
import styles from "./styles/weeklyForecastItem.module.scss";

export default function WeeklyForecastItem({ data, index }) {
  const itemDay = new Date(data.date).getUTCDay(); //gets day of the week from date
  const day = index == 0 ? "today" : getDayOfWeek(itemDay); //sets day to today if index is 0

  const iconSrc = "https:" + data.icon; //converts relative icon path to full url
  return (
    <li className={styles.container} aria-label={`forecast for ${day}`}>
      <p className={styles.day}>{day}</p>
      <span className={styles.conditionSpan}>
        <img
          alt={data.iconText}
          aria-label={data.iconText}
          name="condition"
          src={iconSrc}
        />
        <h4>{data.iconText}</h4>
      </span>
      <span aria-label="temperature" className={styles.tempSpan}>
        <h4 aria-label="high">{data.max}</h4>
        <p aria-label="low">/{data.min}</p>
      </span>
    </li>
  );
}

//converts numerical day to name of day of the week
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
