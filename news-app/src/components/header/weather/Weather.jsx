import style from "./weather.module.css";
import sunImg from "./sun.svg";
import rainImg from "./rain.svg";
import cloudyImg from "./cloudy.svg";
import { createFactory } from "react";

const Weather = () => {
  return (
    <div className={style.weather}>
      <div className="container">
        <div className="info">
          <div className="temperature">100dg</div>
          <div className="windSpeed"></div>
        </div>
        <img src="" alt="weatherImg" className="weatherImg" />
      </div>
    </div>
  );
};


    const getWeather = () => {
      const onSuccess = (position) => {
       let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`
       fetch(weatherUrl)
        .then((resp) => {return resp.json() 
        .then((data) => {console.log(data); return data}); });
      };
      const onError = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${50.449755545630815}&lon=${30.525695923164733}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`
        ).then((resp) => {
          return resp.json()
          .then((data) => {
            console.log(data);
          });
        });
      };
      const getGeoData = () => {
        let aaa = navigator.geolocation.getCurrentPosition(onSuccess, onError);
        console.log(aaa)
        
      };
      getGeoData();
      
    };
    console.log ("fin     =     " + getWeather());


export default Weather;
