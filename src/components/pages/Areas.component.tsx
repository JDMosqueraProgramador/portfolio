import React from 'react'
import { ThemeContext } from '../../context/themes.context';
import areas from '../../helpers/areas.helper';
import CardArea from '../areas/Card.area.component';
import "./areas.scss";

const Areas: React.FC<{}> = () => {
    return (

        <ThemeContext.Consumer>
            {({theme}) => (
                <section className='areas-technologies container-xl' id="areas">
                    <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>AREAS & TECHNOLOGIES</h2>
                    <p className='size-xl-three-md-two text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim repellendus eligendi eum tenetur. Officiis!</p>
                    <div className={"areas " + theme}>
                        {
                            areas.map((area, i) => (
                                <CardArea key={i} img={area.img} technologies={area.technologies} title={area.title} />
                            ))
                        }
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    )
}

export default Areas;