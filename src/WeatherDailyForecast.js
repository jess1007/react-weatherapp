import React, { useState, useEffect } from "react";
import "./WeatherDailyForecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function WeatherDailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");
  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Weather-daily-forecast">
        <div className="row">
          {forecast.map(function (forecastday, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <Forecastday data={forecastday} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
    return null;
  }
}
