import React from 'react';
import tagImg from '../../../images/label.svg';

interface RolInfoProps {
    content: string;
}

const RolInfo: React.FC<RolInfoProps> = ({ content }) => {
    return (
        <div className='d-flex justify-content-center margin-top-16 margin-bottom-16'>
            <img src={tagImg} alt="" className='margin-right-8' />
            <p className='size-xl-three-md-two'>{content}</p>
        </div>
    )
}

export default RolInfo;