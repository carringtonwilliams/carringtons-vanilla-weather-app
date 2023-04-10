function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "dded950fb3t230fdc8e741b7469594ao";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Los Angeles&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
