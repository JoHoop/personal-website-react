import React from "react";
import { Typography, Link } from "@material-ui/core";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {"Copyright ©"} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
