import React from "react";
import { Typography } from "@material-ui/core";
import Typical from "react-typical";
import Resume from "../resume.json";

export const TypicalName = () => {
    return (
        <Typography variant="h5" component="h2" gutterBottom>
            <Typical
                steps={["", 1000, `${Resume.basics.x_title}`, 4000]}
                loop={Infinity}
                wrapper="p"
            />
        </Typography>
    );
};
