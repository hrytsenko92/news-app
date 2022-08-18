import { useEffect, useState } from "react";

const Weather = () => {
  const [currentTemperature, setCurrentTemperature] = useState("loading...");
  const [currentWindSpeed, setCurrentWindSpeed] = useState("loading...")
  const [currentCity, setCurrentCity] = useState("loading...")
  const getTempAndWind = (data) => {
    setCurrentTemperature(data.main.temp)
    setCurrentWindSpeed(data.wind.speed)
    setCurrentCity(data.name)
    return data;
  }
  const getUserWeather = async () => {
    try {
      let userCoords = await new Promise(function (resolve, reject) {return navigator.geolocation.getCurrentPosition(resolve, reject)});
      let response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userCoords.coords.latitude}&lon=${userCoords.coords.longitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`)
        .then((resp) => {return resp.json()})
        .then((resp) => {getTempAndWind(resp) }) 
      return response; 
    } catch (error) {
      console.error("Problem in:", error.message);
    }
  };

  useEffect(() => {
    getUserWeather();
  }, []);
// className={style.weather} down
  return (
    <div > 
      <div className="container">
        <div className="info">
          <div className="city">{currentCity}</div>
          <div className="temperature">{currentTemperature}</div>
          <div className="windSpeed">{currentWindSpeed}</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;