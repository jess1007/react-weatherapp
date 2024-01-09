import React, { useState } from "react";
import "./WeatherDailyForecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function WeatherDailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");
  function showForecast(response) {
    console.log(response.data.daily[0]);
    setForecast(response.data.daily[0]);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Weather-daily-forecast">
        <div className="row">
          <Forecastday data={forecast} />
        </div>
      </div>
    );
  } else {
    const apiKey = "65dff01a3e726fe271a345c212c53929";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios
      .get(apiUrl, { timeout: 20000 })
      .then(showForecast)
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return "null";
  }
}
