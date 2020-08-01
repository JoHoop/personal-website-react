import Resume from "../../resume.json";

export const FirstName = Resume.basics.name.split(" ")[0];

export const LastName = Resume.basics.name.split(" ")[1];
