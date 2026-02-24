import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function Search() {
  const { loading, error, weatherData, fetchWeather } =
    useContext(WeatherContext);

  const [city, setCity] = useState("");

  function handleSearc() {
    fetchWeather(city);
  }

  return (
    <>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearc}>Search</button>
    </>
  );
}

export default Search;
