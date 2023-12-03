const apikey = "dca1c3adc14b08dc37acc810a9af061e";
const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//write the function to call the api
async function getWeather(city) {
  const finalApi = api + city + `&appid=${apikey}&units=metric`;

  const response = await fetch(finalApi);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    //updating the HTML with latest data from api
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("p.humidity").innerHTML = data.main.humidity + "%";
    console.log(data.main.humidity, "humidity");
    console.log(data.wind.speed, "speed");
    document.querySelector("p.wind").innerHTML = data.wind.speed + " km/hr";

    //updating weather icon as per the data
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.scr = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    //let's enable the display
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  if (city.value != "") {
    getWeather(city.value);
  }
});
