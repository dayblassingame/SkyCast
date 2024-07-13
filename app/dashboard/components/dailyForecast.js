import React from "react";
import DailyForecastItem from "./dailyForecastItem";
import styles from "./styles/dailyForecast.module.scss";

export default function DailyForecast({backgroundColor}){

    return(
        <div className={styles.container} style={{backgroundColor: backgroundColor}}>
            <label>{"Today's Forecast"}</label>
            <ul >
                <DailyForecastItem time={"5:00AM"} condition={"sunny"} temp={"45"}/>
            </ul>
        </div>
        
    )
}