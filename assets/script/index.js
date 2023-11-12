 // GLOBAL SCOPE VARIABLES\\
//-------------------------\\

const apiKey = 'fcb075651a9215f5f9dcd22cce0ef442';

const submitBtn = $("#submit-btn");
const clearBtn = $("#clear-btn");

const userInput = $("#city-input")
const curCityEl = $("#city-name");
const curListEl = $("#cur-list");
const forecastEl = $(".forecast");
const forecastInfo = $("#forecast-info");
const citiesStorageEl = $("#ls-cities");


let city;
let cities = [];

// clears local storage which displays the data from the cities array 
function clearLocal(){

    localStorage.clear();
    cities = [];
    loadBtns();
  }
  
  clearBtn.on("click", clearLocal);
  
  // Retrieve data from local storage
  cities = JSON.parse(localStorage.getItem("cities")) || [];
  
  // console.log(cities);


function renderweather(weather) {
    console.log(weather);
    var weatherResults = document.querySelector("#weather-results");
    // create h2 for city name 
    var cityName = document.createElement("h2");
    cityName.textContent = weather.city.name;
    weatherResults.append(cityName);

    // create p for current weather, forecast, date, temparture, humidity, wind speed
    var temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.list[0].main.temp + " F";
    weatherResults.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.list[0].main.humidity + " %";
    weatherResults.append(humidity);

    var windSpd = document.createElement("p");
    windSpd.textContent = "Wind Speed: " + weather.list[0].wind.speed + " mph " + weather.list[0].wind.deg + " °";
    weatherResults.append(windSpd);

    var curDteA = document.createElement("p");
    curDteA.textContent = "Current Date: " + " Thursday, " + weather.list[0].dt_txt;
    weatherResults.append(curDteA);

    var curDteB = document.createElement("p");
    curDteB.textContent = "Current Date: " + " Friday, " + weather.list[8].dt_txt + " Temp: " + weather.list[8].main.temp + " F";
    weatherResults.append(curDteB, temp);

    var curDteC = document.createElement("p");
    curDteC.textContent = "Current Date: " + " Saturday, " + weather.list[16].dt_txt + " Temp: " + weather.list[16].main.temp + " F";
    weatherResults.append(curDteC, temp);

    var curDteD = document.createElement("p");
    curDteD.textContent = "Current Date: " + " Sunday, " + weather.list[24].dt_txt + " Temp: " + weather.list[24].main.temp + " F";
    weatherResults.append(curDteD, temp);

    var curDteE = document.createElement("p");
    curDteE.textContent = "Current Date: " + " Monday, " + weather.list[32].dt_txt + " Temp: " + weather.list[32].main.temp + " F";
    weatherResults.append(curDteE, temp);
    
    // details.append("")

}

// fetches forecast data for cities
function fetchweather(query) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&units=imperial&lat={lat}&lon={lon}&appid=" + apiKey + "const fcb075651a9215f5f9dcd22cce0ef442";

    fetch(url)
    .then(response => response.json())
    .then(data => renderweather(data));

}

fetchweather();
