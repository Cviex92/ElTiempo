function refreshWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date= new Date (response.data.time * 1000);

  
  cityElement.innerHTML= response.data.city; 
  descriptionElement.innerHTML = response.data.conditions. description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  timeElement.innerHTML = formatDate(date);
}

//console.log(response.data); to check where the variables are-> respone.data.comdition.description//


function searchCity (city){
 //make api call and update the interface,receive the city and look for it, THE VALUE on the API
 //Separtion of concer: every function does only thing and do it right//
let apiKey  = "fbef01f4et1b02o0d25c27210a43ef3f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}"&units=metric`;
//console.log(apiUrl);//
axios.get(apiUrl).then(refreshWeather);
}

function formatDate(date){
  
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
let day = days[date.getDay()];

if (minutes < 10){
  minutes = `0 ${minutes}`;
}


return `${day}, ${hours}:${minutes}`;
}



function handleSearchSubmit(event){
  //update the H1 with the searched city//
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement= document.querySelector("#city");
  
  searchCity(searchInput.value); //sending the info to the searchCity function//

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);



searchCity("Jaen");
//