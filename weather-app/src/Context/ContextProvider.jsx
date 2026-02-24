import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

function ContextProvider({ Children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APIkey = import.meta.env.VITE_API_KEY;

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIkey}&units=metric`,
      );

      if (!response.ok) throw new Error("Error accured while fetching data");

      const data = await response.json();

      data ? setWeatherData(data) : false;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <WeatherContext.Provider
        value={{ weatherData, loading, error, fetchWeather }}
      >
        {Children}
      </WeatherContext.Provider>
    </>
  );
}

export default ContextProvider;
