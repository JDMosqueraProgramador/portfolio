import React, { useState } from 'react';
import { ETag } from '../../interfaces/tag.enum';



const Tag: React.FC<{ content: string, type: ETag, setSelected?: Function }> = ({ content, type, setSelected }) => {

    const [active, setActive] = useState<boolean>(false);

    const handleCLick = () => {
        setActive(!active)
        if(setSelected) setSelected(content);
    };

    return (
        <button className={"tag " + type + (active ? " active" : "")} onClick={handleCLick}>{content}</button>
    )
}

export default Tag;