import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "absolute",
        bottom: theme.spacing(6),
        right: theme.spacing(6),
        height: "2.5rem",
        width: "2.5rem",
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles();

    return (
        <Tooltip
            title={"Toggle light/dark theme"}
            placement="right"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label={"Toggle light/dark theme"}
                className={classes.iconButton}
            >
                {theme === "light" ? (
                    <Brightness4Icon className={classes.icon} />
                ) : (
                    <Brightness7Icon className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};
