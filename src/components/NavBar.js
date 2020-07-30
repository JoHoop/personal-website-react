import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Link,
    ListItem,
    ListItemAvatar,
    Avatar,
    AppBar,
    Toolbar,
    Typography,
} from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import Resume from "../resume.json";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[800],
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
        <React.Fragment>
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
                        {Resume.basics.name}
                    </Typography>

                    <nav>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.teal}>JL</Avatar>
                            </ListItemAvatar>
                            <Link
                                href="#home"
                                className="logo fade-up fade-up-1"
                                underline="none"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {Resume.basics.first}
                                <span className="logo__inner">
                                    {Resume.basics.last}
                                </span>
                            </Link>
                        </ListItem>
                    </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};
