import React from "react";
import styles from "./styles/autoComplete.module.scss";

export default function AutoComplete({ list, setCity, closeAutocomplete }) {
  return (
    <div className={styles.container}>
      {list.map((item, index) => (
        <button
          className={styles.item}
          key={index}
          id={item.id}
          onClick={setCity}
        >
          {item.name}, {item.region}, {item.country}
        </button>
      ))}
    </div>
  );
}
