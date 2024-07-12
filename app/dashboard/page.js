import React from "react";
import Search from './search';
import CurrentWeather from "./currentWeather";
import styles from '../styles/components/dashboard.module.scss';
import icon from '../styles/components/icon.module.scss';
import DailyForecast from "./dailyForecast";


export default function comingSoon(){

    return(
        <main>
            <div className={styles.container}>
                <Search/>
                <CurrentWeather/>
                <DailyForecast />
            </div>
        </main>
    )
}