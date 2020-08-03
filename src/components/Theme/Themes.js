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
    typography: {
        fontSize: 16,
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    color: black,
                    backgroundColor: white,
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
    typography: {
        fontSize: 16,
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    color: white,
                    backgroundColor: black,
                },
            },
        },
    },
});
