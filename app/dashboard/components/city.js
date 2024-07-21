import React from "react";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/city.module.scss";

export default function City({ data, setCity, doubleClick }) {
  const iconSrc = "https:" + data.icon; //converts relative url to full url

  const handleClick = () => {
    //sets current city on city click
    setCity(data.id); //data.id: id of city to set
  };

  const handleDoubleClick = () => {
    //set current city and shows full weather dashboard on city double click
    doubleClick(data.id);
  };

  return (
    <button
      id={data.id}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={styles.container}
      role="button"
      aria-label={`set ${data.city}, ${data.region} as current city`}
      title={`${data.city}, ${data.region}`}
    >
      <div className={styles.left}>
        <h3>
          {data.city}, {data.region}
        </h3>
      </div>
      <div className={styles.right}>
        <img alt="weather conditions" src={iconSrc} />
        <h2 aria-label="temperature">{data.temp}</h2>
        <PiCircleBold
          className={styles.icon}
          alt="degrees"
          aria-label="degrees"
        />
      </div>
    </button>
  );
}
