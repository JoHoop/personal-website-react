import React from "react";
import { Link } from "@material-ui/core";
import "./IconsRow.css";
import Resume from "../resume.json";

const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
        href={socialItem.url}
        key={socialItem.network.toLowerCase()}
        className={`icon-button ${socialItem.network.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <i className={socialItem.x_icon}></i>
        <span></span>
    </Link>
));

export const IconsRow = () => {
    return <div className="social-media-div">{socialItems}</div>;
};
