import React from 'react'

const ControlSlider: React.FC<{ img: string, change: Function, prev: boolean }> = ( { img, change, prev } ) => {
    return (
        <button className='slider-control' onClick={ () => change(prev) }><img src={img} alt="" /></button>
    )
}

export default ControlSlider;