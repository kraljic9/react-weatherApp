import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function DispalyWeather() {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  console.log(weatherData);

  const dailyFilter = weatherData.list.filter((weather) =>
    weather.dt_txt.includes("12:00:00"),
  );

  console.log(dailyFilter);

  let date = new Date("2026-03-01 12:00:00");

  console.log(date.getDay());

  return (
    <>
      <div className="display-weather-container">
        <div className="today-forcast">
          <img src="" alt="" className="today-weather-img" />
          <div className="today-weather-data">
            <p>Today</p>
            <p className="city-name">{weatherData.city.name}</p>
            <p>Temperature: {weatherData.list[0].main.temp}°C</p>
            <p>{weatherData.list[0].weather[0].description}</p>
          </div>

          <div className="daily-forcast">
            {dailyFilter.map((weather) => (
              <div className="daily-weather-box" key={weather.dt}>
                <p className="day"></p>
                <img src="" alt="" className="daily-weather-img" />
                <div className="daily-weather-temperature">
                  {weather.main.temp}°C
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DispalyWeather;
