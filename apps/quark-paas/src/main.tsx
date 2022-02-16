import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@arco-design/web-react/dist/css/arco.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
