import React from "react";
import { IoThermometerOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import styles from "./styles/airConditions.module.scss";
import buttonStyles from "../../styles/components/button.module.scss";
import { PiCircleBold } from "react-icons/pi";

//display current air conditions in current city selected
export default function AirConditions({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerHead}>
        <label>Air Conditions</label>
        <button className={buttonStyles.button} disabled={true}>
          See More
        </button>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <label>
            <IoThermometerOutline /> Real Feel
          </label>
          <span>
            <h3>{data.realFeel}</h3>
            <PiCircleBold className={styles.icon} />
          </span>
        </div>
        <div className={styles.section}>
          <label>
            <FaWind /> Wind
          </label>
          <h3>{data.windSpeed} mph</h3>
        </div>
        <div className={styles.section}>
          <label>
            <MdWaterDrop /> Humidity
          </label>
          <h3>{data.humidity}%</h3>
        </div>
        <div className={styles.section}>
          <label>
            <FaSun /> UV Index
          </label>
          <h3>{data.uvIndex}</h3>
        </div>
      </div>
    </div>
  );
}
