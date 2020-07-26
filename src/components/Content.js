import React from "react";
import { Typography, Container } from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import Typical from "react-typical";
import Resume from "../resume.json";

export const Content = (props) => {
    return (
        <Container component="main" className={props.classes} maxWidth="sm">
            <Typical
                steps={["", 1000, `${Resume.basics.x_title}`, 4000]}
                loop={Infinity}
                wrapper="p"
            />
            <Typography variant="h5" component="h2" gutterBottom>
                {Resume.basics.x_title}
            </Typography>
            <a href="#home" class="logo fade-up fade-up-1">
                {Resume.basics.first}
                <span class="logo__inner">{Resume.basics.last}</span>
            </a>

            <Typography variant="h2" component="h1" gutterBottom>
                {Resume.basics.name}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {Resume.basics.summary}
            </Typography>
            <IconsRow />
        </Container>
    );
};
