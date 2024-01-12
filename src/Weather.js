import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import Weatherdata from "./Weatherdata";

function Weather(props) {
  const [forecast, setForecast] = useState({
    ready: false,
  });
  const [location, setLocation] = useState(props.defaultLocation);

  function updateWeather(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      feelslike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      timestamp: new Date(response.data.dt * 1000),
      tempmin: response.data.main.temp_min,
      tempmax: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    SearchWeather();
  }
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function SearchWeather() {
    console.log(forecast.coordinates);
    const apiKey = "65dff01a3e726fe271a345c212c53929";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;
    axios
      .get(apiUrl, { timeout: 10000 })
      .then(updateWeather)
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  if (forecast.ready) {
    return (
      <div className="container container-weather mt-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="search-btn w-50" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="weather-data">
          <Weatherdata data={forecast} />
        </div>
      </div>
    );
  } else {
    SearchWeather();
    return <div>"Loading..."</div>;
  }
}

export default Weather;
