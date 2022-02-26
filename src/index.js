import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, lightBlue } from "@mui/material/colors";
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(es)
TimeAgo.addLocale(ru)

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#7879F1",
      light: teal["A100"],
      dark: lightBlue["400"],
      contrastText: "#FFF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
