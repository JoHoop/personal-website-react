import React from "react";

export const RepoCard = (props) => {
    const userSlashRepo = `${props.user}/${props.repo}`;
    return <div class="repo-card" data-repo={userSlashRepo}></div>;
};
