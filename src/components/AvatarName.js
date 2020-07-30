import React from "react";
import { Link, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import Resume from "../resume.json";

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
                <span className="logo__inner">{Resume.basics.last}</span>
            </Link>
        </ListItem>
    );
};
