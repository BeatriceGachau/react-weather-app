import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://https://github.com/Trishgachau"
            target="_blank"
            rel="noreferrer"
          >
            Beatrice Gachau{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://https://github.com/Trishgachau/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
