import React from 'react'

interface ModalSliderProps {
    url: string;
    close: any;
}

const ModalSlider: React.FC<ModalSliderProps> = ({ url, close }) => {
    return (
        <div className='img-modal' onClick={() => close(false)}>
            <img src={url} alt="" />
        </div>
    )
}

export default ModalSlider;