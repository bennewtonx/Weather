const apiKey = "30eb778dde414e85e06c8f0f558ecdef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")


async function checkWeather (cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".cityPlaceholder").innerHTML = cityName


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



