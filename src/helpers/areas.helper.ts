import { IArea, ITechnology } from "../types/elements/cardArea.interface";
import webImg from "../images/programming.svg";
import databaseImg from "../images/database.svg";
import designImg from "../images/design.svg";
import learnImg from "../images/learning.svg";

import htmlIcon from "../images/tech/html.svg";
import cssIcon from "../images/tech/css.svg";
import sassIcon from "../images/tech/sass.svg";
import jsIcon from "../images/tech/js.svg";
import tsIcon from "../images/tech/typescript.svg";
import reactIcon from "../images/tech/react.svg";
import nodeIcon from "../images/tech/node.svg";
import phpIcon from "../images/tech/php.svg";

import mysqlIcon from "../images/tech/mysql.svg";
import mongoIcon from "../images/tech/mongo.svg";
import postgreIcon from "../images/tech/postgre.svg";
import bootstrapIcon from "../images/tech/bootstrap.svg";
import csharpIcon from "../images/tech/csharp.svg";
import figmaIcon from "../images/tech/figma.svg";
import postmanIcon from "../images/tech/postman.svg";
import vscodeIcon from "../images/tech/vscode.svg";
import pythonIcon from "../images/tech/python.svg";
import intellijIcon from "../images/tech/intellij-idea.svg";
import gitIcon from "../images/tech/git.svg";


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
        content: ["Android", "Desktop", "Figma", "Git"]
    }
]

const areas: Array<IArea<ITechnology>> = [
    {
        img: webImg,
        title: "Web Development",
        technologies: [
            { img: htmlIcon, technology: "HTML" },
            { img: cssIcon, technology: "CSS" },
            { img: sassIcon, technology: "SASS" },
            { img: jsIcon, technology: "JavaScript" },
            { img: tsIcon, technology: "TypeScript" },
            { img: reactIcon, technology: "React" },
            { img: nodeIcon, technology: "Node js" },
            { img: phpIcon, technology: "PHP" }
        ]
    },

    {
        img: databaseImg,
        title: "Databases & Languages",
        technologies: [
            { img: mysqlIcon, technology: "MySQL" },
            { img: postgreIcon, technology: "PostgreSQL" },
            { img: postgreIcon, technology: "SQL Server" },
            { img: mongoIcon, technology: "MongoDB" },
            { img: bootstrapIcon, technology: "Firebase DB" },
            { img: csharpIcon, technology: "C#" },
        ]
    },
    {
        img: designImg,
        title: "Complementary",
        technologies: [
            { img: figmaIcon, technology: "Figma" },
            { img: gitIcon, technology: "Git (Github, Gitlab)" },
            { img: postmanIcon, technology: "Postman" },
            { img: vscodeIcon, technology: "VSCode" },
            { img: intellijIcon, technology: "IntellijIDEA" }
        ]
    },
    {
        img: learnImg,
        title: "I currently learn",
        technologies: [
            { img: pythonIcon, technology: "Python" },
            { img: "", technology: "Data analysis" },
            { img: "", technology: "Machine Learning" },
            { img: "", technology: "Deep Learning" },
            { img: "", technology: "Mobile Development" }
        ]
    }
];

export default areas;