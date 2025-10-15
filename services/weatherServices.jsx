const API_KEY = 'ff50cf20c259ccecbf0bc86fbe06a150'

export async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if(!response.ok)throw Error("City not found");
    return await response.json();
}

