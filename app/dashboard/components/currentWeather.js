import react from "react";
import styles from "./styles/currentWeather.module.scss";
import { PiCircleBold } from "react-icons/pi";

export default function CurrentWeather({ data }) {
  let absoluteIconPath = "";
  if (data.currentWeather.icon != "")
    absoluteIconPath = "https:" + data.currentWeather.icon;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>{data.city}</h2>
        <p>
          Precipitation Amount: {data.currentWeather.precipitationAmount} in
        </p>
        <h1>{data.currentWeather.temperature}</h1>
        <PiCircleBold className={styles.icon} />
      </div>
      <div className={styles.right}>
        <img
          alt="weather status"
          name="weather status"
          src={absoluteIconPath}
        />
      </div>
    </div>
  );
}
