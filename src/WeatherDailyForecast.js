import React from "react";
import Weathericon from "./Weathericon";
import "./WeatherDailyForecast.css";

export default function WeatherDailyForecast() {
  return (
    <div className="Weather-daily-forecast">
      <div className="row">
        <div className="col">
          <div className="Weather-daily-day mt-2 mb-2">Thu</div>
          <div className="Weather-daily-icon">
            <Weathericon code="13d" size="32px" />
          </div>
          <div className="Weather-daily-temp">
            <span className="Weather-daily-temp-min">3°</span>
            <span className="ms-1 fw-bolder Weather-daily-temp-max">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
