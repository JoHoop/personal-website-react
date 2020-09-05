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
                        color: black,
                        backgroundColor: white,
                    },
                },
            },
            MuiIconButton: {
                root: {
                    boxShadow:
                        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                    "&:hover": {
                        backgroundColor: primary,
                    },
                },
            },
            MuiFab: {
                root: {
                    width: "2.5rem",
                    height: "2.5rem",
                    fontSize: "1.25rem",
                },
                primary: {
                    color: black,
                    backgroundColor: "transparent",
                    "&:hover": {
                        color: black,
                        backgroundColor: primary,
                    },
                },
            },
            MuiSpeedDialAction: {
                fab: {
                    color: white,
                    backgroundColor: "transparent",
                    "&:hover": {
                        color: white,
                        backgroundColor: primary,
                    },
                    margin: "0px",
                    marginBottom: "16px",
                },
            },
            MuiTooltip: {
                tooltip: {
                    backgroundColor: primary,
                    color: white,
                    fontSize: 11,
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
            MuiIconButton: {
                root: {
                    boxShadow:
                        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                    "&:hover": {
                        backgroundColor: primary,
                    },
                },
            },
            MuiFab: {
                root: {
                    width: "2.5rem",
                    height: "2.5rem",
                    fontSize: "1.25rem",
                },
                primary: {
                    color: white,
                    backgroundColor: "transparent",
                    "&:hover": {
                        color: white,
                        backgroundColor: primary,
                    },
                },
            },
            MuiSpeedDialAction: {
                fab: {
                    color: white,
                    backgroundColor: "transparent",
                    "&:hover": {
                        color: white,
                        backgroundColor: primary,
                    },
                    margin: "0px",
                    marginBottom: "16px",
                },
            },
            MuiTooltip: {
                tooltip: {
                    backgroundColor: primary,
                    color: white,
                    fontSize: 11,
                },
            },
        },
    })
);
