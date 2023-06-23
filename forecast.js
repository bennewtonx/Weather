apikey = "NkzamyLHQXaXOTFC1KDG7OR3cPCe7L2S";

const getCity = async (city) => {
    const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParameters = `?apikey=${NkzamyLHQXaXOTFC1KDG7OR3cPCe7L2S}&q=${Newcastle-Upon-Tyne}`;
    const response = await fetch(baseUrl + queryParameters);
    const data = await response.json();
    return data[0];
    };

    console.log(getCity);