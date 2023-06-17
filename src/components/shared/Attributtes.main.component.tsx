import React from 'react';

interface AttributtesImageProps {
    url: string,
    text?: string
} 

const AttributtesImage: React.FC<AttributtesImageProps> = ({ url, text = "Image from storyset" }) => {
    return (
        <a href={url} style={{ color: "inherit" }} target="_blank" rel="noreferrer">{text}</a>
    )
}

export default AttributtesImage;