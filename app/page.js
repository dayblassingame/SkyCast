import React from "react";
import { FaUmbrella } from "react-icons/fa";
import icons from './styles/components/icon.module.scss';
import button from './styles/components/button.module.scss';
import styles from './styles/components/page.module.scss';


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
                <a href='#' className={button.button}> Get Started </a>
            </div>
        </div>
      </main>
    );
}
