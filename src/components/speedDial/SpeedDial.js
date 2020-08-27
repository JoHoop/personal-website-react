import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Link, Backdrop } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Resume from "../../resume.json";
import { primary } from "../theme/Themes";

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: "absolute",
        top: theme.spacing(6),
        right: theme.spacing(6),
    },
}));

const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
    { icon: <FavoriteIcon />, name: "Like" },
];

export const SpeedDials = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleHiddenChange = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const actionIcons = Resume.basics.profiles.map((action) => (
        <SpeedDialAction
            key={action.network.toLowerCase()}
            icon={<i className={`${action.x_icon}`}></i>}
            tooltipTitle={action.network}
            TooltipClasses={classes.tooltip}
            onClick={handleClose}
        >
            <Link
                href={action.url}
                key={action.network.toLowerCase()}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="inherit"
            />
        </SpeedDialAction>
    ));

    return (
        <>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction="down"
            >
                {actionIcons}
            </SpeedDial>
        </>
    );
};
