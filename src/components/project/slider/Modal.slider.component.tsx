import React from 'react'

const ModalSlider: React.FC<{ url: string, close: any }> = ({ url, close }) => {
    return (
        <div className='img-modal' onClick={() => close(false)}>
            <img src={url} alt="" />
        </div>
    )
}

export default ModalSlider;