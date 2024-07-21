import react from "react";
import styles from "./styles/currentWeather.module.scss";
import { PiCircleBold } from "react-icons/pi";

export default function CurrentWeather({ data }) {
  let absoluteIconPath = "";
  if (data.currentWeather.icon != "")
    absoluteIconPath = "https:" + data.currentWeather.icon; //coverts relative path to full icon url path

  return (
    <section role="section" className={styles.container}>
      <div className={styles.left}>
        <h2 title={data.city} aria-label={data.city}>
          {data.city}
        </h2>
        <p aria-label="precipitation amount">
          Precipitation Amount: {data.currentWeather.precipitationAmount} in
        </p>
        <h1 title="temperature" aria-label="temperature">
          {data.currentWeather.temperature}
        </h1>
        <PiCircleBold
          className={styles.icon}
          alt="degrees"
          aria-label="degrees"
        />
      </div>
      <div className={styles.right}>
        <img
          alt="weather status"
          name="weather status"
          src={absoluteIconPath}
        />
      </div>
    </section>
  );
}
