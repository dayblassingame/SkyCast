import Image from "next/image";
import React from "react";
import { PiCircleBold } from "react-icons/pi";
import styles from "./styles/city.module.scss";

export default function City(){

    return(
        <label for='1' className={styles.container}>
            <input id='1' type="radio"/>
            <Image alt='condition'/>
            <div className={styles.center}>
                <h3>City Name</h3>
                <p>Time</p>
            </div>
            <div className={styles.right}>
                <h2>31</h2><PiCircleBold className={styles.icon}/>
            </div>
        </label>
    )
}