import React from "react";
import "./IconsRow.css";
import Resume from "../resume.json";

const socialItems = Resume.basics.profiles.map((socialItem) => (
    <a
        href={socialItem.url}
        className={`icon-button ${socialItem.network.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
    >
        <i className={socialItem.x_icon}></i>
        <span></span>
    </a>
));

export const IconsRow = () => {
    return <div className="social-media-div">{socialItems}</div>;
};
