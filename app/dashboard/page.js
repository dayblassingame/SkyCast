import React from "react";
import Search from "./search";
import styles from '../styles/components/dashboard.module.scss';
import icon from '../styles/components/icon.module.scss';


export default function comingSoon(){

    return(
        <main>
            <div className={styles.container}>
            <Search/>
            </div>
        </main>
    )
}