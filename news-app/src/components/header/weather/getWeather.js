const getWeather = () => {
    const getUserWeather = async () => {
        try {
            let userCoords = await new Promise(function (resolve, reject) {return navigator.geolocation.getCurrentPosition(resolve, reject);});
            let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userCoords.coords.latitude}&lon=${userCoords.coords.longitude}&appid=9a564f272063217be589d2a7938b8c8e&units=metric`;
            return await fetch(weatherUrl).then((res) => {return res.json()});
            ///.then((res => console.log(res)))
        } catch (error) {
            console.error("Problem in:", error.message)
        }
    };
    let result = getUserWeather().then((res) => {return res = res.json()}).then(res => console.log(res))
    console.log(result)
}
getWeather();