import React, { useState } from "react";
import axios from "axios";

function Forecast() {
  const [temperature, setTemperature] = useState(null);
  function showTemp(response) {
    setTemperature(response.data.main.temp);
  }
  let apiKey = "65dff01a3e726fe271a345c212c53929";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
  return <p>{Math.round(temperature)}°C</p>;
}
export default Forecast;
