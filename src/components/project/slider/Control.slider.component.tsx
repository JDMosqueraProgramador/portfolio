import React from 'react';

interface ControlSliderProps {
    img: string;
    change: Function;
    prev: boolean;
}

const ControlSlider: React.FC<ControlSliderProps> = ( { img, change, prev } ) => {
    return (
        <button className='slider-control' onClick={ () => change(prev) }><img src={img} alt="" /></button>
    )
}

export default ControlSlider;