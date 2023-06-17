import React, { ReactNode } from 'react';
import { ThemeContext } from '../../../context/themes.context';
import meImg from '../../../images/me.png';
import meDarkImg from '../../../images/me-dark.png'
import { Themes } from '../../../types/context/themes.enum';
import Tooltip from '../../shared/Tooltip.component';
import AttributtesImage from '../../shared/Attributtes.main.component';

const MainImage: React.FC<{}> = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme }): ReactNode => (
                <div className="col-md-6 image">
                    <Tooltip content={<AttributtesImage url='https://www.freepik.es/vector-gratis/ilustracion-concepto-programador_8611162.htm#query=develop&position=35&from_view=search'></AttributtesImage>}>
                        <img src={(theme === Themes.dark) ? meDarkImg : meImg} alt="" className="me-picture" />
                    </Tooltip>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default MainImage;