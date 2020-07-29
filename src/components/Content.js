import React from "react";
import { Typography, Container } from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import Resume from "../resume.json";
import { AvatarName } from "./AvatarName";
import { TypicalName } from "./TypicalName";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <AvatarName />
            <br />
            <br />
            <TypicalName />
            <Typography variant="h2" component="h1" gutterBottom>
                {Resume.basics.name}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {Resume.basics.summary}
            </Typography>
            <br />
            <IconsRow />
        </Container>
    );
};
