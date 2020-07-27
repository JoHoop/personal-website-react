import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./components/NameAnimation.css";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Content mainClasses={classes.main} />
            <Footer footerClasses={classes.footer} />
        </div>
    );
};
