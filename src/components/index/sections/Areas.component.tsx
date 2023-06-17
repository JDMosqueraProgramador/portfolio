import React from 'react'
import { ThemeContext } from '../../../context/themes.context';
import areas from '../../../helpers/areas.helper';
import CardArea from '../areas/Card.area.component';
import learnImg from "../../../images/learning.svg";
import "./areas.scss";
import Tooltip from '../../shared/Tooltip.component';
import AttributtesImage from '../../shared/Attributtes.main.component';

const Areas: React.FC<{}> = () => {
    return (

        <ThemeContext.Consumer>
            {({ theme }) => (
                <section className='areas-technologies container-xl xxl-screen' id="areas">
                    <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>AREAS & TECHNOLOGIES</h2>
                    <p className='size-xl-three-md-two text-center'>They are the areas and technologies I know and work with these.</p>
                    <div className="row mt-4">
                        <div className="col-xl-5 text-center">
                            <Tooltip content={<AttributtesImage url='https://www.freepik.es/vector-gratis/ilustracion-concepto-aprendizaje_14230944.htm#&position=26&from_view=author' />}>
                                <img src={learnImg} alt="" />
                            </Tooltip>
                            <h2 className='size-bold-xl-three-md-two margin-top-24 margin-bottom-24'>Description</h2>
                            <p>Capacidad para analizar, diseñar y desarrollar software. Proponer y evaluar diferentes alternativas que impliquen adaptación de productos de software. Also, I have extra knowmegle about:</p>
                        </div>
                        <div className="col-xl-7">
                            <div className={"areas " + theme}>
                                {
                                    areas.map((area, i) => (
                                        <CardArea key={i} {...area} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </ThemeContext.Consumer>
    )
}

export default Areas;