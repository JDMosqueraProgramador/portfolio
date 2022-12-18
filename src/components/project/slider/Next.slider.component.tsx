import React from 'react';

interface NextSliderProps {
    img: string;
    select: Function;
}

const NextSlider: React.FC<NextSliderProps> = ( { img, select }) => {
    return (
        <img src={img} className="slider-image-change" onClick={ () => select(img) } alt=''/>
    )
}

export default NextSlider;