import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

function ContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APIkey = import.meta.env.VITE_API_KEY;

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`,
      );

      if (!response.ok) throw new Error("Error accured while fetching data");

      const data = await response.json();

      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <WeatherContext.Provider
        value={{ weatherData, loading, error, fetchWeather }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
}

export default ContextProvider;
