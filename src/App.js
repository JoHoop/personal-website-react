import React from "react";
import "./components/NameAnimation.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Content } from "./components/Content";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { ThemeProvider } from "./components/ThemeProvider";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider>
            <CssBaseline />
            <div className={classes.root}>
                <NavBar />

                <Content mainClasses={classes.main} />
                <Footer footerClasses={classes.footer} />
            </div>
        </ThemeProvider>
    );
};
