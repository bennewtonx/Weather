const apiKey = "30eb778dde414e85e06c8f0f558ecdef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const nclWeatherIcon = document.querySelector("#nclWeatherIcon")

async function checkWeather () {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();


var cityName = document.getElementsByClassName("searchBar").value;

document.querySelector("#newcastle").innerHTML = "Newcastle" + " " + Math.round(data.main.temp) + "°C";

if(data.weather[0].main == "Sunny") {
    nclWeatherIcon.src = "sun emoji.png";
}
if(data.weather[0].main == "Clouds") {
    nclWeatherIcon.src = "cloud emoji.png";
}
else if (data.weather[0].main == "Clear") {
    nclWeatherIcon.src = "sun emoji.png";
}
else if (data.weather[0].main == "Rain") {
    nclWeatherIcon.src = "Rain Cloud.png";
}
else if (data.weather[0].main == "Drizzle") {
    nclWeatherIcon.src = "Rain Cloud.png";
}
else if (data.weather[0].main == "Mist") {
    nclWeatherIcon.src = "cloud emoji.png";
}
}