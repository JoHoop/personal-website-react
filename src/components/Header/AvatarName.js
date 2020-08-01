import React from "react";
import { Link, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import { FirstName, LastName } from "./GetFirstLastName";
import { Initials } from "./GetInitials";
import "./NameAnimation.css";

const useStyles = makeStyles((theme) =>
    createStyles({
        teal: {
            color: theme.palette.getContrastText(teal[500]),
            backgroundColor: teal[500],
        },
    })
);

export const AvatarName = () => {
    const classes = useStyles();
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.teal}>{Initials}</Avatar>
            </ListItemAvatar>
            <Link
                href="#home"
                className="logo fade-up fade-up-1"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
            >
                {FirstName}
                <span className="logo__inner">{LastName}</span>
            </Link>
        </ListItem>
    );
};
