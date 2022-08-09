export const getUserWeather = async () => {
    try {
        let userCoords = await new Promise(function (resolve, reject) {return navigator.geolocation.getCurrentPosition(resolve, reject);});
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userCoords.coords.latitude}&lon=${userCoords.coords.longitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`;
        let response = await fetch(weatherUrl).then((res) => {return res.json()})
        return await response;
    } catch (error) {
        console.error("Problem in:", error.message)
    }
};