import { ICardExperience } from "../interfaces/card-experience.interface";
import senaDarkImg from '../images/sena.png'
import senaLightImg from '../images/senal.png'
import freelanceDarkImg from '../images/freelanceL.png'
import freelanceImg from '../images/freelance.png';


export const experiences: Array<ICardExperience> = [
    {
        urls: { dark: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png", light: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png" },
        title: "Computer engineering",
        description: "Autónoma Latinoamericana University",
        date: "2020 - Now"
    },
    {
        urls: { dark: "https://prueba.fedesoft.org/wp-content/uploads/2020/06/logo-fedesoft_2.png", light: "https://fedesoft.org/wp-content/uploads/2020/06/3.-logo-fedesoft-Color.png" },
        title: "National development context ",
        description: "First place in Antioquia",
        date: "2019"
    },
    {
        urls: { dark: senaDarkImg, light: senaLightImg },
        title: "Software development technic",
        description: "SENA Colombia",
        date: "2018 - 2019"
    },

    {
        urls: { dark: senaDarkImg, light: senaLightImg },
        title: "Outstanding Student",
        description: "SENA Colombia",
        date: "2019"
    },

    {
        urls: { dark: freelanceDarkImg, light: freelanceImg },
        title: "Freelance Developer",
        description: "Developing to different organizations",
        date: "2020 - Now"
    }

] 