import React from "react";
import "./SocialMedia.css";
import { Typography, Container, Link } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { Copyright } from "./Copyright";

export const Footer = (props) => {
    return (
        <footer className={props.classes}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    <CodeIcon />
                    /Built at <NightsStayIcon /> by{" "}
                    <Link
                        color="inherit"
                        href="https://github.com/JoHoop/react-dev-card"
                    >
                        Jo Lienhoop
                    </Link>
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
};
