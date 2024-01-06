import React from "react";
import Weathericon from "./Weathericon";
import Fontawesome from "./Fontawesome";
import WeatherTemperature from "./Weathertemperature";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

function Weatherdata(props) {
  let updatedTime = "";
  if (props.data.timestamp) {
    updatedTime = `${props.data.timestamp.getHours()}:${
      props.data.timestamp.getMinutes() < 10 ? "0" : ""
    }${props.data.timestamp.getMinutes()}`;
  }
  return (
    <div className="row">
      <div className="col-6 today-weather">
        <h1 className="fw-bold current-city text-uppercase">
          {props.data.city}
        </h1>
        <div className="weather-today-icon">
          <Weathericon code={props.data.icon} />
        </div>
      </div>
      <div className="col-6 today-weather">
        <div className="d-flex gap-3">
          <h4 className="now-header">NOW</h4>
          <h4 className="now-header text-muted fs-6 mt-1">
            Updated at {updatedTime}
          </h4>
        </div>
        <WeatherTemperature celcius={props.data.temperature} />
        <p className="weather-description text-capitalize">
          {props.data.description}
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-icons d-flex">
            <Fontawesome
              icon={faDroplet}
              color="#52B9E8"
              padding="10px 13px"
              marginR="6px"
              marginL="0px"
            />
            <p className="today-forecast">
              Humidity
              <br />
              <b> {props.data.humidity} %</b>
            </p>
            <Fontawesome
              icon={faWind}
              color="#643399"
              padding="10px 11px"
              marginR="0px"
              marginL="6px"
            />
            <p />
            <p className="today-forecast">
              Wind <br />
              <b> {Math.round(props.data.wind)} km/h</b>
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex weather-icons">
            <Fontawesome
              icon={faTemperatureArrowDown}
              color="#6dccf2"
              padding="10px 11px"
              marginR="2px"
            />
            <p className="today-forecast">
              Min
              <br />
              <b> {Math.round(props.data.tempmin)}°</b>
            </p>
            <Fontawesome
              icon={faTemperatureArrowUp}
              color="#F75838"
              padding="10px 11px"
              marginL="3px"
              marginR="3px"
            />
            <p className="today-forecast">
              Max
              <br />
              <b> {Math.round(props.data.tempmax)}°</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weatherdata;
