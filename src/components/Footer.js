import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { Copyright } from "./Copyright";
import Resume from "../resume.json";

export const Footer = (props) => {
    return (
        <footer className={props.footerClasses}>
            <Container maxWidth="sm">
                <Typography variant="body1" color="textSecondary">
                    <i className="fas fa-code" /> at{" "}
                    <i className="fas fa-moon" /> by{" "}
                    <Link
                        color="inherit"
                        underline="none"
                        href="https://github.com/JoHoop"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <strong>{Resume.basics.name}</strong>
                    </Link>
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
};
