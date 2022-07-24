import React from 'react';

const ImageContact: React.FC<{ url: string, side: string }> = ({ url, side }) => {
    return (
        <img src={url} alt="" className={'image-contact ' + side} />
    )
}

export default ImageContact;