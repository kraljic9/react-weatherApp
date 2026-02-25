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
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default Search;
