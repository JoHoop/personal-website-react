import React from "react";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Header/NavBar";
import { Content } from "../components/Content/Content";

import { makeStyles } from "@material-ui/core/styles";

import DisplacementSphere from "../components/Background/DisplacementSphere";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <NavBar />
                <DisplacementSphere />
                <Content mainClasses={classes.main} />
                <Footer footerClasses={classes.footer} />
            </div>
        </>
    );
};
