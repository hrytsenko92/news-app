import { getUserWeather } from "./getWeather";
import { useEffect, useState } from "react";
import style from "./weather.module.css";
import sunImg from "./sun.svg";
import rainImg from "./rain.svg";
import cloudyImg from "./cloudy.svg";

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const getMyWeather = async () => {
    const weatherData = await getUserWeather().then((res) => {return res;}).then((res) => setCurrentWeather(res));
  };

  useEffect(() => {
    getMyWeather();
  }, []);

  console.log(currentWeather);

  return (
    <div className={style.weather}>
      <div className="container">
        <div className="info">
          <div className="temperature"></div>
          <div className="windSpeed"></div>
          <div className="humidity"></div>
        </div>
        <div>
          {/* {currentWeather} */}
        </div>
        <img src="" alt="weatherImg" className="weatherImg" />
      </div>
    </div>
  );
};

export default Weather;