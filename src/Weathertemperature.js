import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();

    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">
          <strong>{Math.round(props.celcius)}°</strong>
        </span>{" "}
        <span className="units">
          C|
          <a href="/" title="Farenheit" onClick={showFarenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celcius * 5) / 9 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">
          <strong>{Math.round(farenheit)}°</strong>
        </span>{" "}
        <span className="units">
          <a href="/" title="celsius" onClick={showCelsius}>
            C
          </a>
          |F
        </span>
      </span>
    );
  }
}
