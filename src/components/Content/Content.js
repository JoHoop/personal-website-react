import React from "react";
import { Typography, Container } from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../resume.json";
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
                    <Typical
                        steps={[
                            "a student",
                            3000,
                            "a musician",
                            3000,
                            "a developer",
                            3000,
                        ]}
                        loop={Infinity}
                    />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
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
