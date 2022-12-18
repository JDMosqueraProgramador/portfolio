import { ICardExperience } from "../types/elements/cardExperience.interface";
import senaDarkImg from '../images/sena.png'
import senaLightImg from '../images/senal.png'
import freelanceDarkImg from '../images/freelanceL.png'
import freelanceImg from '../images/freelance.png';
import fedesoftLogo from '../images/logoFedesoft.png';
import fedesoftLogoDark from '../images/logoFedesoftDark.png';
import unaulaLogo from '../images/degreeLogo.png';
import triarioLogo from '../images/triarioLogo.webp';
import triarioLogoDark from '../images/logoTriarioDark.svg';


export const experiences: Array<ICardExperience> = [
    {
        urls: { dark: unaulaLogo, light: unaulaLogo },
        title: "Computer engineering",
        description: "Autónoma Latinoamericana University",
        date: "2020 - Now"
    },
    {
        urls: { dark: fedesoftLogoDark, light: fedesoftLogo },
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
        date: "2019 - 2022"
    },
    {
        urls: { dark: triarioLogoDark, light: triarioLogo },
        title: "Triario International",
        description: "Full-Stack Developer",
        date: "2022 - Now"
    }
] 