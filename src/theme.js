import teal from "@material-ui/core/colors/teal";
import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
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

export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: teal[500],
        },
        secondary: {
            main: teal[500],
        },
    },
});
