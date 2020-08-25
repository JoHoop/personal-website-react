import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Grid, Switch, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const PrimaryTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            {/* <Grid component="label" container alignItems="center">
                <Grid item>
                    <i className="fas fa-sun" />
                </Grid>
                <Grid item>
                    <Switch
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                        name="dark mode"
                    />
                </Grid>
                <Grid item>
                    <i className="fas fa-moon" />
                </Grid>
            </Grid> */}
            <PrimaryTooltip
                title={"Toggle light/dark theme"}
                placement="right"
                TransitionComponent={Zoom}
            >
                <IconButton
                    color="inherit"
                    onClick={toggleTheme}
                    aria-label={"Toggle light/dark theme"}
                    data-ga-event-category="header"
                    data-ga-event-action="dark"
                >
                    {theme === "light" ? (
                        <Brightness4Icon />
                    ) : (
                        <Brightness7Icon />
                    )}
                </IconButton>
            </PrimaryTooltip>
        </>
    );
};
