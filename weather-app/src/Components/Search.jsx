import { useContext, useState } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function Search() {
  const { weatherData, fetchWeather } = useContext(WeatherContext);

  const [city, setCity] = useState("");

  function handleSearch() {
    fetchWeather(city);
    console.log(weatherData);
  }

  return (
    <>
      <div className="nav-search">
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          className="weather-search-input"
          placeholder="Enter a city..."
        />
        <button onClick={handleSearch} className="weather-searc-btn">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
