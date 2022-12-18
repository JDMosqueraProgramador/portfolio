import React from 'react';
import { ThemeContext } from '../../../context/themes.context';
import { Themes } from '../../../types/context/themes.enum';
import { ICardExperience } from '../../../types/elements/cardExperience.interface';
import './card-experience.scss';

const CardExperience: React.FC<ICardExperience> =
    ({ urls, title, description, date }) => {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div className={'card-experience ' + theme}>
                        <img src={(theme === Themes.dark) ? urls.dark : urls.light} alt="" className='card-logo' />
                        <h3 className='card-title size-bold-two'>{title}</h3>
                        <p className='card-description size-two'>{description}</p>
                        <span className="card-date size-two">{date}</span>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

export default CardExperience;