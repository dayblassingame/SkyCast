import React from "react";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import AirConditions from "./components/airConditions";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/weatherDashboard.module.scss";

export default function WeatherDashboard(){

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                    <CurrentWeather/>
                    <DailyForecast />
                    <AirConditions />
                </div>
                <div className={styles.right}>
                    <WeeklyForecast/>
                </div>
        </div>
    )
}