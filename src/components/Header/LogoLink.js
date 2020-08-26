import React, { useContext } from "react";
import { Avatar, Link, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import { primary, white } from "../Theme/Themes";
import { Initials } from "../../utils/getName";
import Resume from "../../resume.json";
import { ThemeContext } from "../Theme/ThemeProvider";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
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
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
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

export const LogoLink = () => {
    const classes = useStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Link
            variant="h6"
            href={Resume.basics.url}
            underline="none"
            color="inherit"
            noWrap
        >
            <PrimaryTooltip
                title={Resume.basics.name}
                placement="right"
                TransitionComponent={Zoom}
            >
                <div className={classes.svg}>
                    {/* <Avatar className={`${classes.green}  icon-spin`}>
                            {Initials}
                        </Avatar> */}

                    <Logo className={classes.svg} />
                </div>
            </PrimaryTooltip>
        </Link>
    );
};
