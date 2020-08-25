import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Toolbar, Link, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ThemeToggle } from "../Theme/ThemeToggle";
import Zoom from "@material-ui/core/Zoom";
import { primary, white } from "../Theme/Themes";
import { Initials } from "../../utils/getName";
import Resume from "../../resume.json";
import "../Content/IconsRow.css";
import SvgLogo from "./jo.svg";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    green: {
        color: white,
        backgroundColor: primary,
    },
    svg: {
        width: "40px",
        height: "40px",
        position: "relative",
    },
}));

const PrimaryTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

export const NavBar = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Toolbar className={classes.toolbar}>
                <Link
                    variant="h6"
                    href={Resume.basics.url}
                    underline="none"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <PrimaryTooltip
                        title={Resume.basics.name}
                        placement="right"
                        TransitionComponent={Zoom}
                    >
                        <Avatar className={`${classes.green}  icon-spin`}>
                            {Initials}
                        </Avatar>
                        {/* <img
                            src={SvgLogo}
                            class={`${classes.svg}  icon-spin`}
                            alt="Jo Logo"
                        /> */}
                    </PrimaryTooltip>
                </Link>

                <nav>
                    <ThemeToggle />
                </nav>
            </Toolbar>
        </Fragment>
    );
};
