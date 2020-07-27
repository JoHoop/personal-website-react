import React from "react";
import {
    Typography,
    Container,
    Link,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from "@material-ui/core";
import { IconsRow } from "./IconsRow";
import Typical from "react-typical";
import Resume from "../resume.json";
import { RepoCard } from "./RepoCard";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <ListItem>
                <ListItemAvatar>
                    <Avatar src="../../public/jo.png" alt="Avatar photo" />
                </ListItemAvatar>
                <Link
                    href="#home"
                    className="logo fade-up fade-up-1"
                    underline="none"
                >
                    {Resume.basics.first}
                    <span className="logo__inner">{Resume.basics.last}</span>
                </Link>
            </ListItem>
            <br />
            <br />
            <Typography variant="h5" component="h2" gutterBottom>
                <Typical
                    steps={["", 1000, `${Resume.basics.x_title}`, 4000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom>
                {Resume.basics.name}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                {Resume.basics.summary}
            </Typography>
            <br />
            <IconsRow />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <RepoCard user="johoop" repo="react-dev-card" />
            <RepoCard user="johoop" repo="studip-logo-mod" />
        </Container>
    );
};
