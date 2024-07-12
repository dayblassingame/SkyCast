import React from "react";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import styles from "./styles/dashboard.module.scss";
import DailyForecast from "./dailyForecast";
import WeeklyForecast from "./weeklyForecast";
import AirConditions from "./airConditions";


export default function comingSoon(){

    return(
        <main>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Search/>
                    <CurrentWeather/>
                    <DailyForecast />
                    <AirConditions/>
                </div>
                <div className={styles.right}>
                    <WeeklyForecast/>
                </div>
                
            </div>
        </main>
    )
}