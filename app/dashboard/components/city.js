import React from "react";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/city.module.scss";

export default function City({ data, setCity, doubleClick }) {
  const iconSrc = "https:" + data.icon;
  return (
    <button
      id={data.id}
      onDoubleClick={doubleClick}
      onClick={setCity}
      className={styles.container}
    >
      <div className={styles.left}>
        <h3>
          {data.city}, {data.region}
        </h3>
      </div>
      <div className={styles.right}>
        <img src={iconSrc} />
        <h2>{data.temp}</h2>
        <PiCircleBold className={styles.icon} />
      </div>
    </button>
  );
}
