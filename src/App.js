import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CssBaseline, Container, Link } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Copyright from "./components/Copyright";

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
                <Typography variant="h5" component="h2" gutterBottom>
                    Hey, I'm
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    Jo Lienhoop
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    a computer science student based in Bremen, Germany.
                </Typography>

                <Tooltip title="Mail" aria-label="add">
                    <Fab color="primary" className={classes.fab}>
                        <MailIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="LinkedIn" aria-label="add">
                    <Fab color="primary" className={classes.fab}>
                        <LinkedInIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="GitHub" aria-label="add">
                    <Fab color="primary" className={classes.fab}>
                        <GitHubIcon />
                    </Fab>
                </Tooltip>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        <Link
                            color="inherit"
                            href="https://github.com/JoHoop/react-dev-card"
                        >
                            View GitHub repo
                        </Link>
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}
