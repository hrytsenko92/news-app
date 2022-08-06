import style from "./weather.module.css";
import sunImg from "./sun.svg";
import rainImg from "./rain.svg";
import cloudyImg from "./cloudy.svg";

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
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        let crd = pos.coords;
 
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
      };
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      
      navigator.geolocation.getCurrentPosition(success, error, options);
 

//   getMyLocation();
};

/////
getWeather();
//////






































// const getMyLocation = () => {
//   let userLatitude = null;
//   let userLongitude = null;
//   let success = (position) => {
//     userLatitude = position.coords.latitude;
//     userLongitude = position.coords.longitude;
//   };

//   let err = () => {
//     let geolocationdata = false;
//     return geolocationdata;
//   };

//   let geolocationdata = navigator.geolocation.getCurrentPosition(success, err);
//     console.log(userLatitude);

// //   fetch(
// //     `https://api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`
// //   );

// //   return result;
// };

// let geoData = getMyLocation();
// // console.log(geoData);

export default Weather;
