import React, { ReactNode } from 'react';
import { ThemeContext } from '../../../context/themes.context';
import { Themes } from '../../../helpers/themes.enum';
import './mode.scss';

const MainMode: React.FC<{}> = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }): ReactNode => (
                <div className='mode'>
                    <label htmlFor="mode" className='size-three switch'>
                        <input type="checkbox" name="mode" id="mode" onChange={toggleTheme} checked={(theme === Themes.dark)} />
                        <span className='slider'></span>
                        <p className='d-inline-block margin-left-16'>
                            Cambiar modo
                        </p>
                    </label>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default MainMode;