import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { theme } from "./theme";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

ReactDOM.render(
    <ThemeProvider theme={createMuiTheme(theme)}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
