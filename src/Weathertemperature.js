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
      <div className="current-temperature d-flex gap-3">
        <h4 className="now-header">
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
        </h4>
        <h4 className="now-header text-muted fs-6 mt-1">
          Feels like {Math.round(props.celcius)}°
        </h4>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 5) / 9 + 32;
    return (
      <div className="current-temperature d-flex gap-3">
        <h4 className="now-header">
          <span className="WeatherTemperature">
            <span className="temperature">
              <strong>{Math.round(farenheit)}°</strong>
            </span>{" "}
            <span className="units">
              <a href="/" title="Farenheit" onClick={showCelsius}>
                {" "}
                C
              </a>
              | F
            </span>
          </span>
        </h4>
        <h4 className="now-header text-muted fs-6 mt-1">
          Feels like {Math.round(farenheit)}°
        </h4>
      </div>
    );
  }
}
