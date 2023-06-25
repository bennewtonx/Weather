apikey = "NkzamyLHQXaXOTFC1KDG7OR3cPCe7L2S";

const getCity = async ("newcastle upon tyne") ; {
    const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParameters = `?apikey=${apikey}&q=${city}`;
    const response = await fetch(baseUrl + queryParameters);
    const data = await response.json();
    return data[0];
    };

    console.log(getCity);


const getWeather = async ("329683"); {
    const baseUrl = http://dataservice.accuweather.com/forecasts/v1/hourly/24hour/329683
    const queryParameters = `?apikey=${apikey}`;
    const response = await fetch (baseUrl + queryParameters);
    const data = await response.json();
    return data[0];
};