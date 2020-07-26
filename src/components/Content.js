import React from "react";
import { Typography, Container } from "@material-ui/core";
import SocialMedia from "./SocialMedia";
import Typical from "react-typical";
import Resume from "../resume.json";

export default function Content(props) {
    return (
        <Container component="main" className={props.classes} maxWidth="sm">
            <Typical
                steps={["", 1000, "Hey, I'm", 4000]}
                loop={Infinity}
                wrapper="p"
            />
            <Typography variant="h5" component="h2" gutterBottom>
                Hey, I'm
            </Typography>
            <a href="#home" class="logo fade-up fade-up-1">
                Jo<span class="logo__inner">Lienhoop</span>
            </a>

            <Typography variant="h2" component="h1" gutterBottom>
                {Resume.basics.name}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                a computer science student based in Bremen, Germany.
            </Typography>
            <SocialMedia />
        </Container>
    );
}
