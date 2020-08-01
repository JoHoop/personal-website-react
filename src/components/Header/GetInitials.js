import Resume from "../../resume.json";

export const Initials =
    Resume.basics.name.split(" ")[0].charAt(0).toUpperCase() +
    Resume.basics.name.split(" ")[1].charAt(0).toUpperCase();
