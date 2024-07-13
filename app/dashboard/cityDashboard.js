import React from "react";
import City from "./components/city";
import CurrentWeather from "./components/currentWeather";
import DailyForecast from "./components/dailyForecast";
import WeeklyForecast from "./components/weeklyForecast";
import styles from "./styles/cityDashboard.module.scss";

export default function CityDashboard(){

    return(
        <div className={styles.container}>
            <form className={styles.left}>
                <City/>
            </form>
            <div className={styles.right}>
                <CurrentWeather />
                <DailyForecast backgroundColor={"transparent"}/>
                <WeeklyForecast backgroundColor={"transparent"}/>
            </div>
        </div>
    )
}