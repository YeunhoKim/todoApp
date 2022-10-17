const weatherContainer = document.querySelector("#weather-container");
const city = weatherContainer.querySelector("span:first-child");
const weather = weatherContainer.querySelector("span:last-child");

const API_KEY = "34db59a4e51752a7ef6686db3f8f9ccd";

function geoOk(location) {
  console.log(location);
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].description;
    });
}

function geoError() {
  alert(
    "Can't find your location on the Earth Maybe you are traveling space!!"
  );
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);