import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            Updated at {updatedTime}
          </h4>
        </div>
        <div className="current-temperature d-flex gap-3">
          <h4 className="now-header">{Math.round(props.data.temperature)}°C</h4>
          <h4 className="now-header text-muted fs-6 mt-1">
            Feels like <b>{Math.round(props.data.feelslike)}°C</b>
          </h4>
        </div>
        <p className="weather-description text-capitalize">
          {props.data.description}
        </p>
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
              <b> {props.data.humidity} %</b>
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
              <b> {Math.round(props.data.wind)} km/h</b>
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
              <b> {Math.round(props.data.tempmin)}°</b>
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
