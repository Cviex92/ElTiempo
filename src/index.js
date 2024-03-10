function refreshWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");


  
  cityElement.innerHTML= response.data.city; 
  descriptionElement.innerHTML = response.data.conditions. description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%;
  temperatureElement.innerHTML = Math.round(temperature);
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