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

  function loadBtns (){

    // Check if there is data in local storage
    if (cities && cities.length > 0) {
      // Do something with the data, for example, display it in a list
    
      citiesStorageEl.empty();
    
      for (const city of cities) {
        // Create and append buttons, or process the data as needed
        const citiesBtns = $('<button>').addClass("saved-cities").text(city);
    
        citiesStorageEl.append(citiesBtns);
    
        // Add a click event listener to each button
      citiesBtns.on("click", function () {
        const cityName = $(this).text(); // Get the city name from the button's text
    
        // console.log(cityName);
        // Fetch and display the weather info for the clicked city
        curCityEl.empty();
        curListEl.empty();
        forecastEl.empty();
        forecastInfo.show();
        getGEO(cityName);
    
        });
      }
    }
    }
    
    loadBtns();
    
    // hide 5-day forecast grid on load
    forecastInfo.hide();
    
    // Helper function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

// SUBMIT BTN FUNCTION
function handleSubmit(event){

    event.preventDefault();
  
    // empties weather content w/ new user input
    curCityEl.empty();
    curListEl.empty();
    forecastEl.empty();
  
    // sets new user input to variable 'city' to be used in fetch functions
    city = userInput.val().trim();
    city = capitalizeFirstLetter(city);
  
    if (city.trim() === '') {
      // Show an alert if the input is empty
      alert('Enter a city name, please!');
      
      // Makes sure forecast info is hidden
       // empties weather content w/ new user input
      
      forecastInfo.hide();
  
      return; // Return to exit the function
  
    } else if (cities.includes(city)) {
      // Check if the city is already in the list
      
      alert('You already entered this city');
  
      forecastInfo.hide();
  
    } else {
  
      forecastInfo.show();
  
      getGEO(city);
  
      // add user input to cities array
      cities.push(city);
  
      // saving past user inputs in local storage
      localStorage.setItem("cities", JSON.stringify(cities));
  
      console.log(cities); // testing cities array
  
  
      // create
      
      citiesBtns = $('<button>').addClass("saved-cities");
  
      // attr/text
      citiesBtns.text(city);
      
      // append
      
      citiesStorageEl.append(citiesBtns);
  
      userInput.val('');
      // cities = [];
      loadBtns();
    }
  }
  
  // EVENT LISTENER
  
  submitBtn.on("click", handleSubmit);


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
