import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Wind: 13km/h%</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
              />

              <span className="temperature">{Math.round(temperature)}</span>
              <span className="unit">℃</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let city = "New York";
    const apiUrl = `https://api.shecodes.io
  /weather/v1/current?q=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
