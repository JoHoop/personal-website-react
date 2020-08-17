import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import { Copyright } from "./Copyright";
import Resume from "../../resume.json";
import "../Content/CenterTextMobile.css";

export const Footer = (props) => {
    return (
        <footer className={props.footerClasses}>
            <Container maxWidth="sm">
                <div className="centerTextMobile">
                    <Link
                        color="inherit"
                        underline="none"
                        href="https://github.com/JoHoop/personal-website-react"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Typography variant="body1">
                            <i className="fas fa-code" /> at{" "}
                            <i className="fas fa-moon" /> by{" "}
                            <strong>{Resume.basics.name}</strong>
                        </Typography>
                        <Copyright />
                    </Link>
                </div>
            </Container>
        </footer>
    );
};
