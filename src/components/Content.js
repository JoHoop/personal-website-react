import React from "react";
import { Typography, Container } from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import Resume from "../resume.json";
import "./CenterTextMobile.css";

import Typical from "react-typical";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <div className="centerTextMobile">
                <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.x_title}
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    <Typical
                        steps={[`${Resume.basics.name}`, 4000]}
                        loop={Infinity}
                    />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.summary}
                </Typography>
                <br />
                <IconsRow />
            </div>
        </Container>
    );
};
