import Image from "next/image";
import react from "react";
import styles from "./styles/currentWeather.module.scss";
import { PiCircleBold } from "react-icons/pi";

export default function CurrentWeather(){

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Reidsville</h2>
                <p>Change of rain: 2%</p>
                <h1>70</h1> <PiCircleBold className={styles.icon}/>
            </div>
            <div className={styles.right}>
                <Image alt="weather status" name= "weather status" />
            </div>
        </div>
    )
}