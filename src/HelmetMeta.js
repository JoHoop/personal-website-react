import React from "react";
import Helmet from "react-helmet";
import Resume from "./resume.json";
import Settings from "./settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <link
                rel="icon"
                href={`${process.env.PUBLIC_URL}/${Resume.basics.picture}`}
            />
            <link
                rel="shortcut icon"
                href={`${process.env.PUBLIC_URL}/${Resume.basics.picture}`}
            />
            <meta
                property="og:image"
                content={`${process.env.PUBLIC_URL}/${Resume.basics.picture}`}
            />
            <link
                rel="apple-touch-icon"
                href={`${process.env.PUBLIC_URL}/${Resume.basics.picture}`}
            />
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{Resume.basics.name} | Personal Website</title>
            <meta name="author" content={Resume.basics.name} />
            <meta name="description" content={Resume.basics.description} />
            <meta name="keywords" content={Resume.basics.keywords} />
        </Helmet>
    );
};
