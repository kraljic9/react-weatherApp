import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function DispalyWeather() {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (!weatherData) return null;

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const dailyFilter = weatherData.list.filter((weather) =>
    weather.dt_txt.includes("12:00:00"),
  );

  console.log(weatherData);

  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const weatherTxt = weatherData.list[0].weather.main;

  const weatherEmojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "🌨️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️",
  };

  const emoji = weatherEmojis[weatherTxt] || "🌤️";

  return (
    <div className="display-weather-container">
      <div className="today-forcast">
        <div className="today-weather-img">{emoji}</div>
        <div className="today-weather-data">
          <p className="today-txt">Today</p>
          <h1 className="city-name">{weatherData.city.name}</h1>

          <div className="weather-description">
            <p className="today-temperature">
              Temperature: {weatherData.list[0].main.temp}°C
            </p>
            <p className="today-weather-description">
              {weatherData.list[0].weather[0].description}
            </p>
          </div>
        </div>
      </div>

      <div className="daily-forcast">
        {dailyFilter.map((weather) => {
          const day = new Date(weather.dt_txt);
          const weatherTxt = weather.weather[0].main;

          const weatherEmojis = {
            Clear: "☀️",
            Clouds: "☁️",
            Rain: "🌧️",
            Drizzle: "🌦️",
            Thunderstorm: "⛈️",
            Snow: "🌨️",
            Mist: "🌫️",
            Fog: "🌫️",
            Haze: "🌫️",
          };

          const emoji = weatherEmojis[weatherTxt] || "🌤️";

          return (
            <div className="daily-weather-box" key={weather.dt}>
              <p className="day">{days[day.getDay()]}</p>
              <div className="daily-weather-img">{emoji}</div>
              <div className="daily-weather-temperature">
                {weather.main.temp}°C
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DispalyWeather;
