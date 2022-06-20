import React, { useState } from 'react';
import { ThemeContext } from '../../context/themes.context';
import { ICardExperience } from '../../interfaces/card-experience.interface';
import CardExperience from '../experience/Card.experience.component';
import './experience.scss';

const Experience: React.FC<{}> = () => {

    const [experiences] = useState<Array<ICardExperience>>([
        {
            urls: { dark: "https://prueba.fedesoft.org/wp-content/uploads/2020/06/logo-fedesoft_2.png", light: "https://fedesoft.org/wp-content/uploads/2020/06/3.-logo-fedesoft-Color.png" },
            title: "Concurso nacional de programación",
            description: "Puesto #1 en Antioquia",
            date: "2019"
        },
        {
            urls: { dark: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png", light: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png" },
            title: "Computer engineering",
            description: "Universidad Autónoma Latinoamericana",
            date: "2020 - Now"
        },
        {
            urls: { dark: "https://prueba.fedesoft.org/wp-content/uploads/2020/06/logo-fedesoft_2.png", light: "https://fedesoft.org/wp-content/uploads/2020/06/3.-logo-fedesoft-Color.png" },
            title: "Concurso nacional de programación",
            description: "Puesto #1 en Antioquia",
            date: "2019"
        },
        {
            urls: { dark: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png", light: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png" },
            title: "Computer engineering",
            description: "Universidad Autónoma Latinoamericana",
            date: "2020 - Now"
        },
        {
            urls: { dark: "https://prueba.fedesoft.org/wp-content/uploads/2020/06/logo-fedesoft_2.png", light: "https://fedesoft.org/wp-content/uploads/2020/06/3.-logo-fedesoft-Color.png" },
            title: "Concurso nacional de programación",
            description: "Puesto #1 en Antioquia",
            date: "2019"
        },
        {
            urls: { dark: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png", light: "https://www.unaula.edu.co/sites/default/files/inline-images/logo.png" },
            title: "Computer engineering",
            description: "Universidad Autónoma Latinoamericana",
            date: "2020 - Now"
        }
    ])

    return (

        <ThemeContext.Consumer>
            {({ theme }) => (
                <section className={'experience ' + theme}>
                    <h2 className='experience-title'>ACADEMIC AND WORK</h2>
                    <p className='experience-description container-xxl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae aperiam voluptates quos assumenda est doloribus voluptatem eum hic. Labore.</p>

                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            experiences.map((experience, i) => (
                                <CardExperience key={i} urls={experience.urls} title={experience.title} date={experience.date} description={experience.description} />
                            ))
                        }
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}

export default Experience;