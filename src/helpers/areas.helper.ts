import { IArea } from "../interfaces/card-area.interface";
import webImg from "../images/programming.svg";
import databaseImg from "../images/database.svg";
import designImg from "../images/design.svg";
import learnImg from "../images/learning.svg";

export const tags: Array<{ title: string, content: Array<string> }> = [
    {
        title: "Web development",
        content: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "Node js", "React", "PHP", "Web development"],
    },

    {
        title: "Database Development",
        content: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
    },
    {
        title: "Complementary",
        content: ["Figma", "Git"]
    }  
]

const areas: Array<IArea> = [
    {
        img: webImg,
        title: "Web Development",
        technologies: ["HTML", "CSS & SASS", "JavaScript & TypeScript", "React", "Node js (Express)", "PHP"]
    },

    {
        img: databaseImg,
        title: "Database Development",
        technologies: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB (NoSQL)"]
    },
    {
        img: designImg,
        title: "Complementary",
        technologies: ["Figma", "Git (Github, Gitlab)", "Postman", "VSCode", "IntellijIDEA"]
    },
    {
        img: learnImg,
        title: "I want to learn",
        technologies: ["Data analysis", "Machine Learning", "Deep Learning", "Mobile Development"]
    }
];

export default areas;