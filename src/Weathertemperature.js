import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <strong>{Math.round(props.celcius)}°C</strong>
    </span>
  );
}
