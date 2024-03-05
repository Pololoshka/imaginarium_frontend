import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC",
    },
    secondary: {
      main: orange[500],
    },
    background: {
      paper: "#c4ed82",
      default: "#c4ed82",
    },
    myCustomColor: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },

  typography: {
    myVariant: {
      fontSize: "6rem",
      color: "#f6fe04",
      fontStyle: "italic",
    },
  },
});

root.render(
  <Router>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
