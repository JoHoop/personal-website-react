import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Toolbar, Link } from "@material-ui/core";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { primary, black, white } from "../Theme/Themes";
import { Initials } from "./GetNames";
import Resume from "../../resume.json";
import "../Content/IconsRow.css";

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
}));

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
                    <Avatar className={`${classes.green}  icon-spin`}>
                        {Initials}
                    </Avatar>
                </Link>

                <nav>
                    <ThemeToggle />
                </nav>
            </Toolbar>
        </Fragment>
    );
};
