import React from 'react'
import { ICardArea } from '../../interfaces/card-area.interface';
import './card-area.scss';

const CardArea: React.FC<ICardArea> = 
({ title, technologies, img }) => {
    return (
        <div className='card-area'>
            <h3 className='size-bold-xl-three-md-two margin-bottom-16'>{title}</h3>
            <img src={img} alt="" />
            <ul className='size-xl-three-md-two'>
                {technologies.map((tec, i) => (
                    <li key={i}>{tec}</li>
                ))}
            </ul>
        </div>
    );
}

export default CardArea;