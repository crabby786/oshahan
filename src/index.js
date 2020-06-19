import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  rootElement
);
serviceWorker.unregister();
