import React from "react";
import { Typography, Container } from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import { TextDecrypt, TextDecryptOnce } from "./TextDecrypt";
import Resume from "../../resume.json";
import "./CenterTextMobile.css";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <div className="centerTextMobile">
                <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.x_title}
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    <TextDecryptOnce name={Resume.basics.name} />
                    {" "}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {"a "}
                    <TextDecrypt />
                </Typography>
                {/* <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.summary}
                </Typography> */}
                <br />
                <IconsRow />
            </div>
        </Container>
    );
};
