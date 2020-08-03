import React from "react";
import { Link, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./IconsRow.css";
import Resume from "../../resume.json";
import Zoom from "@material-ui/core/Zoom";

const PrimaryTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        color: "#fafafa",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
        href={socialItem.url}
        key={socialItem.network.toLowerCase()}
        className={`icon-button ${socialItem.network.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <PrimaryTooltip
            title={socialItem.network}
            placement="top"
            TransitionComponent={Zoom}
        >
            <i className={`${socialItem.x_icon} icon-spin`}></i>
        </PrimaryTooltip>
    </Link>
));

export const IconsRow = () => {
    return <div className="social-media-div">{socialItems}</div>;
};
