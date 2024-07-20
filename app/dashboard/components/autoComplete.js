import React from "react";
import styles from "./styles/autoComplete.module.scss";

//displays autocomplete suggestions
export default function AutoComplete({ list, setCity }) {
  //setCity: callback function to set current city when user selects an autocomplete suggestion
  //list: list of auto complete suggestions
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
