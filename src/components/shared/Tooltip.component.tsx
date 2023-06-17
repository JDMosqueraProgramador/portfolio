import React, { PropsWithChildren, ReactElement } from 'react';
import { ThemeContext } from '../../context/themes.context';

interface TooltipProps extends PropsWithChildren {
    content: ReactElement
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    return (
        <ThemeContext.Consumer>
            {
                (theme) => (
                    <div className={'tooltip ' + theme.theme}>
                        <div className='tooltip-content'>{children}</div>
                        <div className='tooltip-hidden'>{content}</div>
                    </div>
                )
            }
        </ThemeContext.Consumer>

    )
}

export default Tooltip;