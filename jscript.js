const apiKey = "30eb778dde414e85e06c8f0f558ecdef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBar = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather (cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

console.log(data);

    document.querySelector(".cityPlaceholder").innerHTML = cityName
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".windText").innerHTML = (data.wind.speed) + "mph";
    document.querySelector(".humidityText").innerHTML = "humidity:" + " " + (data.main.humidity);
    document.querySelector("#feelsLikeText").innerHTML = "feels like" + " " + Math.round(data.main.feels_like)  + "°C";
    document.querySelector("#high").innerHTML = "high:" + " " + Math.round(data.main.temp_max) + "°C";
    document.querySelector("#low").innerHTML = "low:" + " " + Math.round(data.main.temp_min) + "°C";
    document.querySelector("#visibilityText").innerHTML = "visibility:" + " " + (data.visibility);
    document.querySelector("#sunriseText").innerHTML = "sunrise:" + " " + Math.floor(data.sys.sunrise) + "AM";
    document.querySelector("#sunsetText").innerHTML = "sunset" + " " + (data.sunset) + "PM";





    if(data.weather[0].main == "Sunny") {
        mainCityImg.src = "sun emoji.png";
    }
    if(data.weather[0].main == "Clouds") {
        mainCityImg.src = "cloud emoji.png";
    }
    else if (data.weather[0].main == "Clear") {
        mainCityImg.src = "sun emoji.png";
    }
    else if (data.weather[0].main == "Rain") {
        mainCityImg.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        mainCityImg.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Mist") {
        mainCityImg.src = "cloud emoji.png";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);

})



