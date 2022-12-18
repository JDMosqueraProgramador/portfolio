import React from 'react';
import { ThemeContext } from '../../../context/themes.context';
import CardExperience from '../experience/Card.experience.component';
import { experiences } from '../../../helpers/experience.helper';
import './experience.scss';

const Experience: React.FC<{}> = () => {

    return (

        <ThemeContext.Consumer>
            {({ theme }) => (
                <section className={'experience ' + theme} id="experience">
                    <h2 className='experience-title'>ACADEMIC AND WORK</h2>
                    <p className='experience-description container-xxl xxl-screen '>Here you can know about my studies, recognitions and achievements.</p>

                    <div className="d-flex flex-wrap justify-content-center xxl-screen">
                        {
                            experiences.map((experience, i) => (
                                <CardExperience key={i} {...experience} />
                            ))
                        }
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    );
}

export default Experience;