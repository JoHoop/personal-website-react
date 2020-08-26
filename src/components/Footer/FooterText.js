import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import Resume from "../../resume.json";
import { primary } from "../Theme/Themes";

const useStyles = makeStyles((theme) => ({
    footerText: {
        position: "absolute",
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        "&:hover": {
            color: primary,
        },
    },
}));

export const FooterText = () => {
    const classes = useStyles();

    return (
        <Link
            color="inherit"
            underline="none"
            href="https://github.com/JoHoop/personal-website-react"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footerText}
        >
            <Typography variant="body1">
                <i className="fas fa-code" /> at <i className="fas fa-moon" />{" "}
                by {Resume.basics.name}
            </Typography>
        </Link>
    );
};
