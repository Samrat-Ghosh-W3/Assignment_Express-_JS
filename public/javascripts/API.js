'use strict'

var processWeatherData = function (weatherInfo) {
    console.log(weatherInfo);
    document.getElementById('js-weather-info').innerHTML = JSON.stringify(weatherInfo, null, 4);
}

var getWeatherData = function () {
    sendRequest('GET', '/weather/'+city)
        .then(processWeatherData).catch(console.log);
}

getWeatherData();