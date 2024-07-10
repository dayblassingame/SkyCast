import React from "react";
import { FaUmbrella } from "react-icons/fa";
import styles from '../styles/components/dashboard.module.scss';
import icon from '../styles/components/icon.module.scss';

export default function comingSoon(){
    
    return(
        <main>
            <div  className={styles.container}>
                <div className={styles.content}>
                    <h1> Coming Soon </h1>
                </div>
            </div>
        </main>
    )
}