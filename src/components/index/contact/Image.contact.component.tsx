import React from 'react';

interface ImageContactProps {
    url: string, side: string
}

const ImageContact: React.FC<ImageContactProps> = ({ url, side }) => {
    return (
        <img src={url} alt="" className={'image-contact ' + side} />
    )
}

export default ImageContact;