import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const primary = "#17b978";
export const black = "#171c28";
export const white = "#fafafa";

export const LightTheme = responsiveFontSizes(
    createMuiTheme({
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
            htmlFontSize: 16,
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
    })
);

export const DarkTheme = responsiveFontSizes(
    createMuiTheme({
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
            htmlFontSize: 16,
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
    })
);
