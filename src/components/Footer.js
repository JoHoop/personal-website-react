import React from "react";
import { Container } from "@material-ui/core";
import { Copyright } from "./Copyright";

export const Footer = (props) => {
    return (
        <footer className={props.footerClasses}>
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </footer>
    );
};
