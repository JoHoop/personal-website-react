import React from "react";
import { Typography } from "@material-ui/core";

export const Copyright = () => {
    return (
        <Typography variant="body1" color="textSecondary">
            {"Copyright ©"} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
