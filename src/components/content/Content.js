import React from "react";
import { Typography, Container } from "@material-ui/core";
import { TextDecrypt, TextDecryptOnce } from "./TextDecrypt";
import Resume from "../../resume.json";
import { FirstName } from "../../utils/getName";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecryptOnce
                    text={`${Resume.basics.x_title} ${FirstName}`}
                />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecryptOnce text={`a ${Resume.basics.job}`} />
                <TextDecryptOnce
                    text={`from ${Resume.basics.location.country}`}
                />
            </Typography>
        </Container>
    );
};
