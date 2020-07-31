import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Grid, Switch } from "@material-ui/core";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Grid component="label" container alignItems="center">
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
        </Grid>
    );
};
