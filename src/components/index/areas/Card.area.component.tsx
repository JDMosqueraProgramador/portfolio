import React from 'react'
import { IArea } from '../../../types/elements/cardArea.interface';
import './card-area.scss';

const CardArea: React.FC<IArea> = 
({ title, technologies, img }) => {
    return (
        <div className='card-area' >
            <h3 className='size-bold-xl-three-md-two margin-bottom-16'>{title}</h3>
            <img src={img} alt="" />
            <ul className='size-xl-three-md-two' translate='no'>
                {technologies.map((tec, i) => (
                    <li key={i}>{tec}</li>
                ))}
            </ul>
        </div>
    );
}

export default CardArea;