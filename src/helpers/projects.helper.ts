import { IProject } from "../interfaces/project.interface";

export const projects: Array<IProject> = [
    {
        id: 1,
        img: ["https://i.ibb.co/7SgxqnK/login.png",
            "https://i.ibb.co/nswYVnQ/main.png",
            "https://i.ibb.co/wc0TcKP/profile.png",
            "https://i.ibb.co/yR6Trww/questions.png",
            "https://i.ibb.co/k5w7D42/work.png",
            "https://i.ibb.co/v1q4Ydd/chat.png",
            "https://i.ibb.co/86GYpxR/group.png"],
        name: "UNAULA NETWORK",
        description: "Unaula network is a social network from Autónoma Latinoamericana University in Medellín, Colombia",
        rol: "Full-Stack developer, Database Admin",
        year: 2021,
        technologies: ["Web development", "HTML", "SASS", "JavaScript", "TypeScript", "Node js", "React", "MongoDB", "Figma", "Git"],
        links: [{ name: "Git (Front-end)", url: "https://gitlab.com/DEVUNAULA/unaulanetwork" }, { name: "Git (Back-end)", url: "https://gitlab.com/DEVUNAULA/unaulanetwork-api" }, { name: "Figma", url: "https://www.figma.com/file/kqemfGHKXS8h6KyA0YG6la/UNAULA-NETWORK?node-id=207%3A5875" }]
    },
    {
        id: 2,
        img: ["https://i.ibb.co/D9TGN6t/psc.png", "https://i.ibb.co/Wnzhjn1/PSC-Google-Chrome-2022-07-28-17-44-42-3-Adobe-Express.gif", "https://i.ibb.co/T8PsLG9/Adopci-n-PSC-Google-Chrome-2022-07-28-17-45-22-2-Adobe-Express.gif", "https://i.ibb.co/zRxFq0F/Donar-PSC-Google-Chrome-2022-07-28-17-46-01-2-Adobe-Express.gif", "https://i.ibb.co/n8CK7mX/Fundaci-n-PSC-Google-Chrome-2022-07-28-17-45-39-2-Adobe-Express.gif", "https://i.ibb.co/5s139gd/Iniciar-Sesi-n-PSC-Google-Chrome-2022-07-28-17-48-10-2.gif"],
        name: "Peluditos San Cristóbal",
        description: "Peluditos San Cristóbal is managment system for Peluditos San Cristóbal foundation in Medellín, Colombia. That foundation takes care of rescue animals from the streets, give them a home and find who adopts them. Moreover, through the web system, you can adopt a pet, donate and participate of this foundation.",
        rol: "Full-Stack developer",
        year: 2019,
        technologies: ["Web development", "HTML", "CSS", "SASS", "JavaScript", "PHP", "MySQL", "Git"],
        links: [{ name: "Git", url: "https://github.com/Daniel-Amaya/PSC" }, { name: "Presentation", url: "https://www.youtube.com/watch?v=lg_5qOerqik&t=6s&ab_channel=DanielAmaya" }, { name: "Page", url: "https://peluditosmedellin.000webhostapp.com/index.php" }]
    },
    {
        id: 3,
        img: ["https://i.ibb.co/gVStBPN/Deportes-Jesus-Rey-Google-Chrome-2022-07-24-18-16-22-2-Adobe-Express.gif", "https://i.ibb.co/kSmsXnn/Programaci-n-Google-Chrome-2022-07-24-18-17-34-2-Adobe-Express.gif", "https://i.ibb.co/Qvpf4QS/Equipos-Deportes-Jesus-Rey-Google-Chrome-2022-07-24-18-18-12-2-Adobe-Express.gif", "https://i.ibb.co/QcVP2CD/Deportes-jesus-rey-Google-Chrome-2022-07-24-18-28-45-2-Adobe-Express.gif", "https://i.ibb.co/k1qtgxW/Crear-Cuenta-Google-Chrome-2022-07-24-18-19-18-2-Adobe-Express.gif"],
        name: "Deportes Jesús Rey",
        description: "Deportes Jesús Rey is managment system for Jesús Rey school in Medellín, Colombia",
        rol: "Full-Stack developer",
        year: 2018,
        technologies: ["Web development", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
        links: [{ name: "Git", url: "https://github.com/JDMosqueraProgramador/DJR-MVC" }]
    },
    {
        id: 4,
        img: ["http://www.acofi.edu.co/eiei2016/wp-content/uploads/2016/09/Logo-Universidad-de-La-Salle.jpg"],
        name: "La Salle Concurso",
        description: "La Salle Concurso is managment system for La Salle university in Bogotá, Colombia",
        rol: "Full-Stack developer",
        year: 2022,
        technologies: ["Android", "Java", "TypeScript", "Node js", "PostgreSQL", "Git"],
        links: [{ name: "Git", url: "https://github.com/KevinLBermudez/ApiLasalle" }]
    },
    {
        id: 5,
        img: ["https://i.ibb.co/2Yf1vB8/easygo.jpg"],
        name: "EasyGo",
        description: "EasyGo is transport system through motorcycles.",
        rol: "Full-Stack developer",
        year: 2021,
        technologies: ["Desktop", "JavaScript", "C#", "PostgreSQL", "Git"],
        links: [{ name: "Git", url: "https://github.com/JDMosqueraProgramador/easyGo" }]
    },
    {
        id: 6,
        img: [
            "https://i.ibb.co/ZLPwKGf/baal.png",
            "https://i.ibb.co/tB9LC4g/baal2.png",
            "https://i.ibb.co/Z1RXJsq/baal3.png",
            "https://i.ibb.co/zHZmnwG/baal4.png",
            "https://i.ibb.co/yyw4Bf4/baal5.png",
            "https://i.ibb.co/VYwrwQq/baal7.png"
        ],
        name: "Br*** y A*** de Alto Poder",
        description: "Br*** y A*** poderosos",
        rol: "Front-end developer",
        year: 2021,
        technologies: ["Web development", "HTML", "SASS", "JavaScript", "React", "Git"],
        links: [{ name: "Git", url: "https://github.com/JDMosqueraProgramador/v-ba" }]
    }

]; 