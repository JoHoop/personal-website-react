import { createMuiTheme } from "@material-ui/core/styles";

export const primary = "#17b978";
export const black = "#171c28";
export const white = "#fafafa";

export const LightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: primary,
        },
        secondary: {
            main: primary,
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    color: black,
                },
            },
        },
    },
});

export const DarkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: primary,
        },
        secondary: {
            main: primary,
        },
        background: {
            default: black,
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundColor: black,
                },
            },
        },
    },
});
