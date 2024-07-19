"use client";

import React, { useEffect, useRef, useState } from "react";
import { searchApi } from "./api/searchAPI";
import styles from "./styles/search.module.scss";
import AutoComplete from "./components/autoComplete";
import { useAppDispatch } from "../lib/hooks";
import { fetchCityWeather } from "./api/fetchCityWeather";
import { setWeather } from "../lib/weatherSlice";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function Search({ clickHandler }) {
  const [search, setSearch] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (search == "" || search.length < 3) {
        setAutoComplete([]);
        return;
      }
      searchApi(search, apiKey)
        .then((res) => setAutoComplete(res))
        .catch((err) => setError(true));
    }, [500]);

    return () => clearTimeout(debounce);
  }, [search]);

  async function setCurrentCity(e) {
    fetchCityWeather(e.target.id, apiKey)
      .then((res) => dispatch(setWeather(res)))
      .catch((err) => setError(true));
    setSearch("");
    setAutoComplete([]);
  }

  return (
    <div className={styles.container}>
      <input
        id="searchInput"
        name="search"
        placeholder="Search cities by name or zipcode"
        onClick={clickHandler}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
      />
      {autoComplete.length > 0 && (
        <AutoComplete
          list={autoComplete}
          setCity={setCurrentCity}
          closeAutocomplete={() => setAutoComplete([])}
        />
      )}
    </div>
  );
}
