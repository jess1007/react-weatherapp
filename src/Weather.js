import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
function Weather() {
  const [forecast, setForecast] = useState({
    ready: false,
  });
  const [location, setLocation] = useState("");
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
  };
  function updateWeather(response) {
    console.log(response.data);
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
    });
  }
  if (forecast.ready) {
    return (
      <div className="container container-weather mt-4">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-6">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className="col-6 d-flex gap-3">
              <button className="search-btn w-50" type="submit">
                Search
              </button>

              <button className="current-btn w-50" type="submit">
                Your location
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6 today-weather">
            <h1 className="fw-bold current-city text-uppercase">
              {forecast.city}
            </h1>
            <div className="weather-today-icon">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={60}
                animate={true}
              />
            </div>
          </div>
          <div className="col-6 today-weather">
            <div className="d-flex gap-3">
              <h4 className="now-header">NOW</h4>
              <h4 className="now-header text-muted fs-6 mt-1">
                Updated at {forecast.timestamp.getHours()}:
                {forecast.timestamp.getMinutes() < 10 ? "0" : ""}
                {forecast.timestamp.getMinutes()}
              </h4>
            </div>
            <div className="current-temperature d-flex gap-3">
              <h4 className="now-header">
                {Math.round(forecast.temperature)}°C
              </h4>
              <h4 className="now-header text-muted fs-6 mt-1">
                Feels like <b>{Math.round(forecast.feelslike)}°C</b>
              </h4>
            </div>
            <p className="weather-description text-capitalize">
              {forecast.description}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-icons d-flex">
              <FontAwesomeIcon
                icon={faDroplet}
                style={{
                  padding: "10px 13px",
                  background: "#52B9E9",
                  fontSize: "20px",
                  borderRadius: "50%",
                  color: "white",
                  marginRight: "6px",
                }}
              />
              <p className="today-forecast">
                Humidity
                <br />
                <b> {forecast.humidity} %</b>
              </p>
              <FontAwesomeIcon
                icon={faWind}
                style={{
                  padding: "10px 11px",
                  background: "#653399",
                  fontSize: "20px",
                  borderRadius: "50%",
                  color: "white",
                  marginLeft: "15px",
                  marginRight: "6px",
                }}
              />
              <p className="today-forecast">
                Wind <br />
                <b> {Math.round(forecast.wind)} km/h</b>
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex weather-icons">
              <FontAwesomeIcon
                icon={faTemperatureArrowDown}
                style={{
                  padding: "10px 11px",
                  background: "#52B9E9",
                  fontSize: "20px",
                  borderRadius: "50%",
                  color: "white",
                  marginLeft: "15px",
                  marginRight: "6px",
                }}
              />
              <p className="today-forecast">
                Min
                <br />
                <b> {Math.round(forecast.tempmin)}°</b>
              </p>
              <FontAwesomeIcon
                icon={faTemperatureArrowUp}
                style={{
                  padding: "10px 12px",
                  background: "#f75838",
                  fontSize: "20px",
                  borderRadius: "50%",
                  color: "white",
                  marginLeft: "15px",
                  marginRight: "6px",
                }}
              />
              <p className="today-forecast">
                {" "}
                Max
                <br />
                <b> {Math.round(forecast.tempmax)}°</b>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "65dff01a3e726fe271a345c212c53929";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(updateWeather);
    return <div>"Loading..."</div>;
  }
}
export default Weather;
