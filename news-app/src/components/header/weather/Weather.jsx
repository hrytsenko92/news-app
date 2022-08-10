import { useEffect, useState, useMemo } from "react";
import style from "./weather.module.css";
import sunImg from "./sun.svg";
import rainImg from "./rain.svg";
import cloudyImg from "./cloudy.svg";

const Weather = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    const getUserWeather = async () => {
      try {
        let userCoords = await new Promise(function (resolve, reject) {return navigator.geolocation.getCurrentPosition(resolve, reject)});
        let response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userCoords.coords.latitude}&lon=${userCoords.coords.longitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`)
          .then((resp) => {return resp.json()})
          .then((resp) => {console.log(resp); setCurrentWeather(resp) })
        return response; 
      } catch (error) {
        console.error("Problem in:", error.message);
      }
    };
    getUserWeather();
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
        <div>{/* {currentWeather} */}</div>
        <img src="" alt="weatherImg" className="weatherImg" />
      </div>
    </div>
  );
};

export default Weather;