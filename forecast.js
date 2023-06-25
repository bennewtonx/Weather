const apiKey = "30eb778dde414e85e06c8f0f558ecdef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";

async function checkWeather () {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

}

checkWeather();