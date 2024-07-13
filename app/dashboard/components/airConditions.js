import React from "react";
import { IoThermometerOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import styles from "./styles/airConditions.module.scss";
import buttonStyles from "../../styles/components/button.module.scss";
import { PiCircleBold } from "react-icons/pi";

export default function AirConditions(){

    return(
        <div className={styles.container}> 
            <div className={styles.containerHead}>
                <label>Air Conditions</label>
                <button className={buttonStyles.button}>See More</button>
            </div>
            <div className={styles.main}> 
                <div className={styles.section}>
                    <label><IoThermometerOutline/> Real Feel</label>
                    <span><h3>30</h3><PiCircleBold className={styles.icon} /></span>
                </div>
                <div className={styles.section}>
                    <label><FaWind/> Wind</label>
                    <h3>0.2km/h</h3>
                </div>
                <div className={styles.section}>
                    <label><MdWaterDrop/> Chance of Rain</label>
                    <h3>2%</h3>
                </div>
                <div className={styles.section}>
                    <label> <FaSun/> UV Index</label>
                    <h3>3</h3>
                </div>
            </div>
        </div>
    )
}