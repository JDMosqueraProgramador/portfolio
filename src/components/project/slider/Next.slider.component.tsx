import React from 'react';

const NextSlider: React.FC<{ img: string, select: Function }> = ( { img, select }) => {
    return (
        <img src={img} className="slider-image-change" onClick={ () => select(img) } alt=''/>
    )
}

export default NextSlider;