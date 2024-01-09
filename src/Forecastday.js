import React from "react";
import Weathericon from "./Weathericon";

export default function Forecastday(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="Forecastday">
      <div className="col">
        <div className="Weather-daily-day mt-2 mb-2">{day()}</div>
        <div className="Weather-daily-icon">
          <Weathericon code={props.data.weather[0].icon} size="32" />
        </div>
        <div className="Weather-daily-temp">
          <span className="Weather-daily-temp-min">
            {Math.round(props.data.temp.min)}°
          </span>
          <span className="ms-1 fw-bolder Weather-daily-temp-max">
            {" "}
            {Math.round(props.data.temp.max)}°
          </span>
        </div>
      </div>
    </div>
  );
}
