const API_KEY = "1e8d57d11752224c5c6cc04d92280b4d";

function OnGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weather = document.querySelector("#weather span:last-Child");
      const city = document.querySelector("#weather span:first-Child");
      city.innerText = `${date.name}`;
      weather.innerText = `${date.main.temp}º ${date.weather[0].main}`;
    });
}

function OnGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);
