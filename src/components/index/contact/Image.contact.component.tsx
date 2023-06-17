import React from 'react';
import AttributtesImage from '../../shared/Attributtes.main.component';
import Tooltip from '../../shared/Tooltip.component';

interface ImageContactProps {
    url: string, side: string
}

const ImageContact: React.FC<ImageContactProps> = ({ url, side }) => {
    return (
        <div className={'image-contact ' + side}>
            <Tooltip content={<AttributtesImage url='https://www.freepik.es/vector-gratis/ilustracion-concepto-programador_8611162.htm#query=develop&position=35&from_view=search'></AttributtesImage>}>
                <img src={url} alt="" className='w-100' />
            </Tooltip>
        </div>
    )
}


export default ImageContact;