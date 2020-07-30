import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, AppBar, Toolbar, Typography } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        backgroundColor: theme.palette.type === "light" ? "#fafafa" : "#303030",
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    teal: {
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
    },
}));

export const NavBar = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Avatar className={classes.teal}>JL</Avatar>
                    </Typography>

                    <nav></nav>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};
