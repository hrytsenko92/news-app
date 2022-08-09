import { getUserWeather } from "./getWeather";
import { useEffect } from "react";
import style from "./weather.module.css";
import sunImg from "./sun.svg";
import rainImg from "./rain.svg";
import cloudyImg from "./cloudy.svg";
import { createFactory } from "react";

const Weather = () => {
  const getMyWeather = async () => {
    const weatherData = await getUserWeather().then((res) => {console.log(res); return res});
    console.log(weatherData.main);
  };

  useEffect(() => {
    getMyWeather();
  }, []);
  return (
    <div className={style.weather}>
      <div className="container">
        <div className="info">
          <div className="temperature">{}</div>
          <div className="windSpeed"></div>
          <div className="humidity"></div>
        </div>
        <img src="" alt="weatherImg" className="weatherImg" />
      </div>
    </div>
  );
};

export default Weather;
