import React from "react";
import WeeklyForecastItem from "./weeklyForecastItem";
import styles from "./styles/weeklyForecast.module.scss";

export default function WeeklyForecast({backgroundColor}){

    return(
        <div className={styles.container} style={{backgroundColor: backgroundColor}}>
            <label>7-Day Forecast</label>
            <ul>
                <WeeklyForecastItem/>
            </ul>
        </div>
    )
}