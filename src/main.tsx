import "./index.css";

import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";

const location = new ReactLocation();

ReactDOM.render(
  <React.StrictMode>
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
