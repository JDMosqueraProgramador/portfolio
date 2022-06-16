import React, { FC } from 'react';
import './menu.scss';
import myselfImg from '../../images/myself.jpeg';
import { Themes } from '../../helpers/themes.enum';

const Menu: FC<{ theme: Themes, extra: boolean }> = ({ theme, extra }) => {
    return (
        <header className={'menu container-fluid ' + theme.toString()}>
            <nav className='row align-items-center'>
                <ul className='col-xl-8 d-flex align-items-center size-bold-two'>
                    <li>About me</li>
                    <li>Academic & work</li>
                    <li>Projects</li>
                    <li>Development areas & languages</li>
                    <button className={"btn-primary  d-none d-xl-block contact-btn " + ((extra) ? "" : "invisible")}> Contact me </button>
                </ul>

                <div className={'name-header col-xl-4 d-flex align-items-center justify-content-end size-bold-two ' + ((extra) ? "d-block" : "d-none")}>
                    <img src={myselfImg} className="myself margin-right-8" alt="" />
                    <span style={{
                        color: (theme === Themes.dark) ? "white" : "inherit"
                    }}>Juan David Mosquera Muñoz</span>
                </div>

            </nav>
        </header>
    );
}

export default Menu;