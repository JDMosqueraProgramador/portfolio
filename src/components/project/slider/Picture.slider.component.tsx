import React from 'react';
import arrowRight from '../../../images/arrow-right-circle.svg';
import arrowLeft from '../../../images/arrow-left-circle.svg';
import ControlSlider from './Control.slider.component';

const PictureSlider: React.FC<{ img: string, handleControls: Function }> = ({ img, handleControls }) => {
    return (
        <div className='slider-picture'>
            <ControlSlider img={arrowLeft} change={handleControls} prev={true} />
            <img src={img} alt="" className='slider-main-image'/>
            <ControlSlider img={arrowRight} change={handleControls} prev={false} />
        </div>
    )
}

export default PictureSlider;