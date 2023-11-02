function renderweather(weather) {
    var weatherResults = document.querySelector("#weather-results");
    // create h2 for city name 
    var cityName = document.createElement("h2");
    cityName.textContent = weather.name;
    weatherResults.append(cityName);

    // create p for current weather, forecast, date, temparture, humidity, wind speed
    var temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.main.temp + " F";
    weatherResults.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    weatherResults.append(humidity);

    var windSpd = document.createElement("p");
    windSpd.textContent = "Wind Speed: " + weather.wind.speed + " mph";
    weatherResults.append(humidity);

    
    details.append("")

}

// fetches forecast data for cities
function fetchweather(query) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&lat={lat}&lon={lon}&appid=fcb075651a9215f5f9dcd22cce0ef442";

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

}

fetchweather();
