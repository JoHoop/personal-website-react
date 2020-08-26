import React, { useContext } from "react";
import { Avatar, Link, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import { primary, white } from "../Theme/Themes";
import { Initials } from "../../utils/getName";
import Resume from "../../resume.json";
import { ReactComponent as SvgLogoLight } from "./jo_light.svg";
import { ReactComponent as SvgLogoDark } from "./jo_dark.svg";
import { ThemeContext } from "../Theme/ThemeProvider";

const useStyles = makeStyles((theme) => ({
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
        position: "absolute",
        top: theme.spacing(6),
        left: theme.spacing(6),
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

export const Logo = () => {
    const classes = useStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
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
                {/* <Avatar className={`${classes.green}  icon-spin`}>
                            {Initials}
                        </Avatar> */}

                {theme === "dark" ? (
                    <SvgLogoLight className={`${classes.svg}  icon-spin`} />
                ) : (
                    <SvgLogoDark className={`${classes.svg}  icon-spin`} />
                )}
            </PrimaryTooltip>
        </Link>
    );
};
