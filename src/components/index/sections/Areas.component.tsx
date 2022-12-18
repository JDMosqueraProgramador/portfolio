import React from 'react'
import { ThemeContext } from '../../../context/themes.context';
import areas from '../../../helpers/areas.helper';
import CardArea from '../areas/Card.area.component';
import "./areas.scss";

const Areas: React.FC<{}> = () => {
    return (

        <ThemeContext.Consumer>
            {({theme}) => (
                <section className='areas-technologies container-xl xxl-screen' id="areas">
                    <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>AREAS & TECHNOLOGIES</h2>
                    <p className='size-xl-three-md-two text-center'>They are the areas and technologies I know and work with these.</p>
                    <div className={"areas " + theme}>
                        {
                            areas.map((area, i) => (
                                <CardArea key={i} {...area} />
                            ))
                        }
                    </div>
                </section>
            )}
        </ThemeContext.Consumer>
    )
}

export default Areas;