"use client";
import React, { useState } from "react";
import Search from "./search";
import styles from "./styles/dashboard.module.scss";
import WeatherDashboard from "./weatherDashboard";
import CityDashboard from "./cityDashboard";
import { FaUmbrella } from "react-icons/fa";
import { IoIosList, IoIosPartlySunny } from "react-icons/io";
import StoreProvider from "../lib/storeProvider";
import { useAppSelector } from "../lib/hooks";

//dashboard displays nav, citydash/weather dash, and search
export default function Dashboard() {
  const [dash, setDash] = useState({
    //controls whether city or weather dash are displayed
    city: false,
    weather: true,
  });
  const { city, weather } = dash;

  return (
    <StoreProvider>
      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <button
              className={styles.logoIcon}
              onClick={() => setDash({ city: false, weather: true })}
            >
              <FaUmbrella />
            </button>
            <button
              onClick={() => setDash({ city: false, weather: true })}
              className={weather ? styles.selected : ""}
            >
              <IoIosPartlySunny className={styles.icon} />
              Weather
            </button>
            <button
              onClick={() => setDash({ city: true, weather: false })}
              className={city ? styles.selected : ""}
            >
              <IoIosList className={styles.icon} />
              Cities
            </button>
          </div>
          <div className={styles.right}>
            <Search
              clickHandler={
                !city
                  ? () => setDash({ city: true, weather: false })
                  : () => {
                      return;
                    }
              }
            />
            {city && <CityDashboard setDash={setDash} />}
            {weather && <WeatherDashboard />}
          </div>
        </div>
      </main>
    </StoreProvider>
  );
}
