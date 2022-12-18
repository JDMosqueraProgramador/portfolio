import React, { useState } from 'react';
import { ETag } from '../../types/elements/tag.enum';



interface TagProps {
    content: string;
    type: ETag;
    setSelected?: Function;
}

const Tag: React.FC<TagProps> = ({ content, type, setSelected }) => {

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