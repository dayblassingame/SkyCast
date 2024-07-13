"use client"
import React, { useState } from "react";
import Search from "./search";
import styles from "./styles/dashboard.module.scss";
import WeatherDashboard from "./weatherDashboard";
import CityDashboard from "./cityDashboard";
import { FaUmbrella } from "react-icons/fa";
import { IoIosList , IoIosPartlySunny } from "react-icons/io";

export default function Dashboard(){
    const [dash, setDash] = useState({
        city: false,
        weather: true
    })
    const {city, weather} = dash;

    return(
        <main>
            <div className={styles.container}>
                <div className={styles.left}>
                    <button className={styles.logoIcon} onClick={()=> (setDash({city: false, weather: true}))}><FaUmbrella /></button>
                    <button onClick={()=> (setDash({city: false, weather: true}))} className={weather ? styles.selected : ''}><IoIosPartlySunny className={styles.icon}/>Weather</button>
                    <button onClick={()=> (setDash({city: true, weather: false}))} className={city ? styles.selected : ''}><IoIosList className={styles.icon}/>Cities</button>
                </div>
                <div className={styles.right}>
                    <Search clickHandler={()=>(setDash({city: true, weather: false}))}/>
                    {city && <CityDashboard/> }
                    {weather && <WeatherDashboard/>}
                </div>
            </div>
        </main>
    )
}