const apiKey = "30eb778dde414e85e06c8f0f558ecdef";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const nclWeatherIcon = document.querySelector("#nclWeatherIcon")

async function checkNewcastle () {
    const response = await fetch(apiUrl + "newcastle-upon-tyne" + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

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
    checkNewcastle();


async function checkEdinburgh () {
    const response = await fetch(apiUrl + "edinburgh" + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#edinburgh").innerHTML = "Edinburgh" + " " + Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Sunny") {
        ediWeatherIcon.src = "sun emoji.png";
    }
    if(data.weather[0].main == "Clouds") {
        ediWeatherIcon.src = "cloud emoji.png";
    }
    else if (data.weather[0].main == "Clear") {
        ediWeatherIcon.src = "sun emoji.png";
    }
    else if (data.weather[0].main == "Rain") {
        ediWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        ediWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Mist") {
        ediWeatherIcon.src = "cloud emoji.png";
    }
}
    checkEdinburgh();


async function checkManchester () {
    const response = await fetch(apiUrl + "manchester" + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#manchester").innerHTML = "Manchester" + " " + Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Sunny") {
        manWeatherIcon.src = "sun emoji.png";
    }
    if(data.weather[0].main == "Clouds") {
        manWeatherIcon.src = "cloud emoji.png";
    }
    else if (data.weather[0].main == "Clear") {
        manWeatherIcon.src = "sun emoji.png";
    }
    else if (data.weather[0].main == "Rain") {
        manWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        manWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Mist") {
        manWeatherIcon.src = "cloud emoji.png";
    }
}
checkManchester();


async function checkLondon () {
    const response = await fetch(apiUrl + "london" + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#london").innerHTML = "London" + " " + Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Sunny") {
        londonWeatherIcon.src = "sun emoji.png";
    }
    if(data.weather[0].main == "Clouds") {
        londonWeatherIcon.src = "cloud emoji.png";
    }
    else if (data.weather[0].main == "Clear") {
        londonWeatherIcon.src = "sun emoji.png";
    }
    else if (data.weather[0].main == "Rain") {
        londonWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        londonWeatherIcon.src = "Rain Cloud.png";
    }
    else if (data.weather[0].main == "Mist") {
        londonWeatherIcon.src = "cloud emoji.png";
    }
}
    checkLondon();

    searchBtn.addEventListener("click", ()=>{

        checkCity(searchBar.value);
    })
