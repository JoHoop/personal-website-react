import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip } from "@material-ui/core";
import Resume from "../../resume.json";
import { primary } from "../theme/Themes";
import Zoom from "@material-ui/core/Zoom";

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
        <Tooltip
            title={"GitHub repo"}
            placement="top"
            TransitionComponent={Zoom}
        >
            <Link
                color="inherit"
                underline="none"
                href="https://github.com/JoHoop/personal-website-react"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footerText}
            >
                <Typography variant="body1">
                    <i className="fas fa-code fa-sm" /> at{" "}
                    <i className="fas fa-moon fa-sm" /> by {Resume.basics.name}
                </Typography>
            </Link>
        </Tooltip>
    );
};
