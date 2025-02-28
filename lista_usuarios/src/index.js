import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


//Este archivo tiene como funcion de renderizar la app con el html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
