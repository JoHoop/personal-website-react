import React from "react";
import { Logo } from "../components/Header/Logo";
import { Content } from "../components/Content/Content";

import { makeStyles } from "@material-ui/core/styles";

import DisplacementSphere from "../components/Background/DisplacementSphere";
import { ThemeToggle } from "../components/Theme/ThemeToggle";

import { FooterText } from "../components/Footer/FooterText";
import { FooterIcons } from "../components/Footer/FooterIcons";

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
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <DisplacementSphere />
                <Logo />
                <ThemeToggle />
                <Content mainClasses={classes.main} />
                <FooterText />
                <FooterIcons />
            </div>
        </>
    );
};
