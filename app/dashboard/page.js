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
          <nav role="navigation" className={styles.left}>
            <button
              role="button"
              alt-text="logo"
              aria-label="home"
              title="home"
              className={styles.logoIcon}
              onClick={() => setDash({ city: false, weather: true })}
            >
              <FaUmbrella />
            </button>
            <button
              role="button"
              alt-text="weather dashboard"
              aria-label="weather dashboard"
              title="weather dashboard"
              onClick={() => setDash({ city: false, weather: true })}
              className={weather ? styles.selected : ""}
            >
              <IoIosPartlySunny className={styles.icon} />
              Weather
            </button>
            <button
              role="button"
              alt-text="city dashboard"
              aria-label="city dashboard"
              title="city dashbaord"
              onClick={() => setDash({ city: true, weather: false })}
              className={city ? styles.selected : ""}
            >
              <IoIosList className={styles.icon} />
              Cities
            </button>
          </nav>
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
