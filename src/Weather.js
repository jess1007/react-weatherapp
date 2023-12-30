import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import Forecast from "./Forecast";
import ReactAnimatedWeather from "react-animated-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
function Weather() {
  return (
    <div className="container mt-4">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
            />
          </div>
          <div className="col-6 d-flex gap-3">
            <button className="search-btn" type="submit">
              Search
            </button>

            <button className="current-btn" type="submit">
              Current
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6 today-weather">
          <h1 className="fw-bold current-city">MELBOURNE</h1>
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
          <div className="d-flex">
            <h4 className="now-header">NOW</h4>
            <h5 className="now-header text-muted">Updated at 7.45</h5>
          </div>
          <div className="current-temperature d-flex">
            <h4 className="now-header">
              <Forecast />
            </h4>
            <h5 className="now-header text-muted ms-4">
              Feels like <b className="fs-6">19°C</b>
            </h5>
          </div>
          <p className="weather-description">Partly cloudy</p>
        </div>
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
              Rain
              <br />
              <b> 20%</b>
            </p>
            <FontAwesomeIcon
              icon={faSun}
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
              UV index <br />
              <b> extreme</b>
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex weather-icons">
            <FontAwesomeIcon
              icon={faWind}
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
              Wind
              <br />
              <b> 20km/h</b>
            </p>
            <FontAwesomeIcon
              icon={faPercent}
              style={{
                padding: "10px 12px",
                background: "#653399",
                fontSize: "20px",
                borderRadius: "50%",
                color: "white",
                marginLeft: "15px",
                marginRight: "6px",
              }}
            />
            <p className="today-forecast">
              {" "}
              Humidity
              <br />
              <b> 20%</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
