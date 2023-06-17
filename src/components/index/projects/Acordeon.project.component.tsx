import React, { useEffect, useRef, useState } from 'react'
import { IArea } from '../../../types/elements/cardArea.interface';
import imgArrowDown from '../../../images/arrow-down.svg';
import imgArrowDownWhite from '../../../images/arrow-down-white.svg';

import './acordeon.scss';
import Tag from '../../shared/Tag.project.component';
import { ThemeContext } from '../../../context/themes.context';
import { Themes } from '../../../types/context/themes.enum';
import { ETag } from '../../../types/elements/tag.enum';

interface AcordeonProps<T> extends IArea<T> {
    setSelected: Function
}

const AcordeonProject: React.FC<AcordeonProps<string>> = ({ title, technologies, setSelected }) => {

    const [active, setActive] = useState<boolean>(true);
    const [height, setHeight] = useState<number>(0);

    const content: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const handleClick = () => setActive(!active);

    useEffect(() => {
        setHeight(content.current!.clientHeight);
        setActive(false);
    }, []);

    return (

        <ThemeContext.Consumer>
            {({ theme }) => (

                <div className={'acordeon ' + theme + (active ? " acordeon-active" : "")}>
                    <div className="acordeon-head d-flex" onClick={handleClick}>
                        <h3 className='size-two'>{title}</h3>
                        <img src={(theme === Themes.dark) ? imgArrowDownWhite : imgArrowDown} className="ms-auto" alt="" />
                    </div>

                    <div className="acordeon-content" ref={content} style={
                        (height > 0) ? { height: (active) ? height : 0 } : {}
                    } >
                        {
                            technologies.map((technology, i) => (
                                <Tag type={ETag.green} key={i} content={technology} setSelected={setSelected} />
                            ))
                        }
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default AcordeonProject;