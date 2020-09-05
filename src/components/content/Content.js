import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${Resume.basics.x_title} ${FirstName}`} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={`a ${Resume.basics.job}`} />
                <TextDecrypt text={`from ${Resume.basics.location.country}`} />
            </Typography>
        </Container>
    );
};
