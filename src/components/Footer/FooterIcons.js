import React from "react";
import { Link, Tooltip, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import "../Content/IconsRow.css";
import Resume from "../../resume.json";
import Zoom from "@material-ui/core/Zoom";

const PrimaryTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
    footerIcons: {
        position: "absolute",
        bottom: theme.spacing(6),
        right: theme.spacing(6),
    },
    iconButton: {
        height: "2.5rem",
        width: "2.5rem",
        margin: theme.spacing(0.5),
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const FooterIcons = () => {
    const classes = useStyles();

    const socialItems = Resume.basics.profiles.map((socialItem) => (
        <PrimaryTooltip
            title={socialItem.username}
            placement="top"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                aria-label={socialItem.network}
                className={classes.iconButton}
            >
                <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
            </IconButton>
        </PrimaryTooltip>
    ));

    return <div className={classes.footerIcons}>{socialItems}</div>;
};
