import React, { ReactNode } from 'react';
import { ThemeContext } from '../../../context/themes.context';
import meImg from '../../../images/me.png';
import meDarkImg from '../../../images/me-dark.png'
import { Themes } from '../../../helpers/themes.enum';

const MainImage: React.FC<{}> = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }): ReactNode => (
                <div className="col-md-6 image">
                    <img src={(theme === Themes.dark) ? meDarkImg : meImg} alt="" className="me-picture" />
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default MainImage;