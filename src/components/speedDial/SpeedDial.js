import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Backdrop } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Resume from "../../resume.json";

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: "absolute",
        top: theme.spacing(6),
        right: theme.spacing(6),
    },
}));

export const SpeedDials = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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
                hidden={false}
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
