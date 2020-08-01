import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Toolbar, Typography } from "@material-ui/core";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { primary, black, white } from "../Theme/Themes";
import { Initials } from "./GetInitials";

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
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Avatar className={classes.green}>{Initials}</Avatar>
                </Typography>

                <nav>
                    <ThemeToggle />
                </nav>
            </Toolbar>
        </Fragment>
    );
};
