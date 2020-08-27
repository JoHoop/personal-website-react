import React from "react";
import { Typography } from "@material-ui/core";

export const Today = (props) => {
    var date = new Date();
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var day = days[date.getDay()];

    return (
        <Typography variant="h5" component="h2" gutterBottom>
            Hope you're having a good {day}
        </Typography>
    );
};
