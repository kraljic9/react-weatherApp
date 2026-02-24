import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function DispalyWeather() {
  const { weatherData } = useContext(WeatherContext);

  console.log(weatherData);

  const dailyFilter = weatherData.list.filter((weather) =>
    weather.dt_txt.includes("12:00:00"),
  );

  console.log(dailyFilter);

  return (
    <>
      {weatherData ? (
        <div className="display-weather-container">
          <div className="today-forcast">
            <img src="" alt="" className="today-weather-img" />
            <div className="today-weather-data">
              <p>Today</p>
              <p className="city-name">{weatherData.city.name}</p>
              <p>Temperature: {weatherData.list[0].main.temp}°C</p>
              <p>{weatherData.list[0].weather[0].description}</p>
            </div>

            <div className="daily-forcast"></div>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default DispalyWeather;
