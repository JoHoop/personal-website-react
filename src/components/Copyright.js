import React from "react";
import { Typography, Link } from "@material-ui/core";
import Resume from "../resume.json";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            <i className="fas fa-code" /> at <i className="fas fa-moon" /> by{" "}
            <Link
                color="inherit"
                underline="none"
                href="https://github.com/JoHoop"
                target="_blank"
                rel="noopener noreferrer"
            >
                <strong>{Resume.basics.name}</strong>
            </Link>
        </Typography>
    );
};
