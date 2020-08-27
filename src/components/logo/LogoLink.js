import React from "react";
import { Avatar, Link, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import { primary, white } from "../theme/Themes";
import { Initials } from "../../utils/getName";
import Resume from "../../resume.json";
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
        boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        borderRadius: "50%",
    },
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

export const LogoLink = () => {
    const classes = useStyles();

    return (
        <Link
            variant="h6"
            href={Resume.basics.url}
            underline="none"
            color="inherit"
            noWrap
        >
            <Tooltip
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
            </Tooltip>
        </Link>
    );
};
