import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import Settings from "../../settings.json";

export const primary = `${Settings.colors.primary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;

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
            h2: {
                fontWeight: 500,
            },
            h5: {
                fontWeight: 500,
            },
            body1: {
                fontWeight: 500,
            },
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
