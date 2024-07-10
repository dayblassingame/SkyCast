import React from "react";
import { FaUmbrella } from "react-icons/fa";
import Link from "next/link";

import icons from './styles/components/icon.module.scss';
import button from './styles/components/button.module.scss';
import styles from './styles/components/landing.module.scss';


export default function Landing(){

    return(
      <main>
        <div className={styles.landingContainer}>
            <div className={styles.landingLeft}>
                <FaUmbrella className={icons.logo} />
            </div>
            <div className={styles.landingRight}> 
                <FaUmbrella className={icons.logoMini}/>
                <h1> SkyCast </h1>
                <p> Weather App </p>
                <Link href="/dashboard" className={button.button}> Get Started</Link>
            </div>
        </div>
      </main>
    );
}
