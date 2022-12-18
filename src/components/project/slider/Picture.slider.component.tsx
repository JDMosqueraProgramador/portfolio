import React, { useState } from 'react';
import arrowRight from '../../../images/arrow-right-circle.svg';
import arrowLeft from '../../../images/arrow-left-circle.svg';
import ControlSlider from './Control.slider.component';
import ModalSlider from './Modal.slider.component';

interface PictureSliderProps {
    img: string;
    handleControls: Function;
}

const PictureSlider: React.FC<PictureSliderProps> = ({ img, handleControls }) => {


    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className='slider-picture'>
            <ControlSlider img={arrowLeft} change={handleControls} prev={true} />
            <img src={img} alt="" className='slider-main-image' onClick={() => setModal(true) }/>
            <ControlSlider img={arrowRight} change={handleControls} prev={false} />

            {
                (modal) ? <ModalSlider url={img} close={setModal} /> : null
            }
        </div>
    )
}

export default PictureSlider;