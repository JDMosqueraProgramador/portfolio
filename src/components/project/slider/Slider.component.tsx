import React, { useState } from 'react';
import NextSlider from './Next.slider.component';
import PictureSlider from './Picture.slider.component';
import './slider.scss';

interface SliderProps {
    pictures: Array<string>;
}

const Slider: React.FC<SliderProps> = ({ pictures }) => {

    const [imgSelected, setImgSelected] = useState<string>(pictures[0]);

    const handleControls = (prev: boolean) => {
        let currentIndex: number = pictures.findIndex(picture => picture === imgSelected);

        if(currentIndex === 0 && prev) {
            setImgSelected(pictures[pictures.length - 1])
        } else if(currentIndex === pictures.length - 1 && !prev) {
            setImgSelected(pictures[0])
        } else {
            setImgSelected((prev) ? pictures[currentIndex - 1] : pictures[currentIndex + 1]);
        }
    }

    return (
        <div className='slider'>
            <PictureSlider img={imgSelected} handleControls={handleControls} />

            <div className="slider-images-container">
                {
                    pictures.map((picture, i) => (
                        <NextSlider key={i} img={picture} select={setImgSelected} />
                    ))
                }
            </div>

        </div>
    );
}

export default Slider;