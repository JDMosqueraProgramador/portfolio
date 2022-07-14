import React, { useState } from 'react';

const Tag: React.FC<{ content: string, setSelected?: Function }> = ({ content, setSelected }) => {

    const [active, setActive] = useState<boolean>(false);

    const handleCLick = () => {
        setActive(!active)
        if(setSelected) setSelected(content);
    };

    return (
        <button className={"tag tag-green " + (active ? "active" : "")} onClick={handleCLick}>{content}</button>
    )
}

export default Tag;