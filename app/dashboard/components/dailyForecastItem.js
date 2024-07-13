import React from "react";
import Image from "next/image";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/dailyForecastItem.module.scss";

export default function DailyForecastItem({time, condition, temp}){
    return(
        <li className={styles.container}>
            <p>{time}</p>
            <Image alt="" className={styles.condition} name={condition}/>
            <span className={styles.temp}> <h3>{temp} </h3> <PiCircleBold className={styles.icon} /> </span> 
        </li>
    );
}