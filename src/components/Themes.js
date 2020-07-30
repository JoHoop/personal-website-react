import teal from "@material-ui/core/colors/teal";
import { createMuiTheme } from "@material-ui/core/styles";

export const LightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: teal[500],
        },
        secondary: {
            main: teal[500],
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    color: "#303030",
                },
            },
        },
    },
});

export const DarkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: teal[500],
        },
        secondary: {
            main: teal[500],
        },
        background: {
            default: "#1c1c25",
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: "#303030",
                },
            },
        },
    },
});
