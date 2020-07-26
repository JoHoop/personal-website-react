import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CssBaseline, Container, Link } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Copyright from "./components/Copyright";
import Typical from "react-typical";
import "./NameAnimation.css";
import "./Stars.css";
import SocialMedia from "./components/SocialMedia";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typical
                    steps={["", 1000, "Hey, I'm", 4000]}
                    loop={Infinity}
                    wrapper="p"
                />
                <Typography variant="h5" component="h2" gutterBottom>
                    Hey, I'm
                </Typography>
                <a href="#home" class="logo fade-up fade-up-1">
                    Jo<span class="logo__inner">Lienhoop</span>
                </a>

                <Typography variant="h2" component="h1" gutterBottom>
                    Jo Lienhoop
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    a computer science student based in Bremen, Germany.
                </Typography>
                <SocialMedia />
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        <CodeIcon />
                        /Built at <NightsStayIcon /> by{" "}
                        <Link
                            color="inherit"
                            href="https://github.com/JoHoop/react-dev-card"
                        >
                            Jo Lienhoop
                        </Link>
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
