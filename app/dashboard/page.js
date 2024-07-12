import React from "react";
import Search from "./search";
import CurrentWeather from "./currentWeather";
import styles from '../styles/components/dashboard.module.scss';
import icon from '../styles/components/icon.module.scss';


export default function comingSoon(){

    return(
        <main>
            <div className={styles.container}>
                <Search/>
                <CurrentWeather/>
            </div>
        </main>
    )
}