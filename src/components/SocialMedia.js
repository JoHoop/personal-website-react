import React from "react";
import "./SocialMedia.css";

export default function SocialMedia() {
    return (
        <div className="social-media-div">
            <a
                href={"mailto:saadpasta70@gmail.com"}
                className="icon-button google"
                target="_blank"
            >
                <i className="fab fa-google"></i>
                <span></span>
            </a>
            <a
                href={"https://www.linkedin.com/in/saadpasta/"}
                className="icon-button linkedin"
                target="_blank"
            >
                <i className="fab fa-linkedin-in"></i>
                <span></span>
            </a>

            <a
                href={"https://github.com/saadpasta"}
                className="icon-button github"
                target="_blank"
            >
                <i className="fab fa-github"></i>
                <span></span>
            </a>

            <a
                href={"https://gitlab.com/saadpasta"}
                className="icon-button gitlab"
                target="_blank"
            >
                <i className="fab fa-gitlab"></i>
                <span></span>
            </a>
        </div>
    );
}
