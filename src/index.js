import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "mvp.css";
import "./styles.css";
import "bulma";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
