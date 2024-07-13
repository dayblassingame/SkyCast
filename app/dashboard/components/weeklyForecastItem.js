import Image from "next/image";
import React from "react";
import styles from "./styles/weeklyForecastItem.module.scss";

export default function WeeklyForecastItem(){

    return(
        <li className={styles.container} >
            <p className={styles.day}>Today</p>
            <span className={styles.conditionSpan}><Image alt="condition" name="conditions"/> <h4>sunny</h4></span>
            <span className={styles.tempSpan}><h4>53</h4><p>/22</p></span>
        </li>
    )
}