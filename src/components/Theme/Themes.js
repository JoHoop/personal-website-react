import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import Settings from "../../settings.json";

export const primary = `${Settings.colors.primary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;
export const fontSize = `${Settings.typography.fontSize}`;

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
            fontSize: fontSize,
            htmlFontSize: fontSize,
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
            fontSize: fontSize,
            htmlFontSize: fontSize,
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
