import React from 'react';

const ButtonsInfo: React.FC<{ buttons: Array<{ name: string, url: string }> }> = ({ buttons }) => {

    return (
        <div className='w-100'>
            <h3 className="size-bold-xl-three-md-two margin-bottom-16 margin-top-16">Click to go</h3>
            <div className="d-flex buttons-projects">
                {
                    buttons.map((buttom, i) => (
                        <a className='btn-primary w-100' href={buttom.url} key={i} target="_blank" rel="noreferrer">{buttom.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default ButtonsInfo;