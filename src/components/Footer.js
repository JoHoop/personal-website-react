import React from "react";
import { Typography, Container, Link } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { Copyright } from "./Copyright";
import Resume from "../resume.json";

export const Footer = (props) => {
    return (
        <footer className={props.footerClasses}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    <Link
                        color="inherit"
                        underline="none"
                        href="https://github.com/JoHoop/react-dev-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CodeIcon />
                        /Built at <NightsStayIcon /> by {Resume.basics.name}
                    </Link>
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
};
