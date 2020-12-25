import React from "react";
import Helmet from "react-helmet";
import Resume from "../settings/resume.json";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{Resume.basics.name} | {Resume.basics.location.city}, {Resume.basics.location.country}</title>
            <meta name="author" content={Resume.basics.name} />
            <meta name="description" content={Resume.basics.description} />
            <meta name="keywords" content={Resume.basics.keywords} />
        </Helmet>
    );
};
