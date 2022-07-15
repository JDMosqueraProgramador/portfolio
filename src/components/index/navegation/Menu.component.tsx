import React, { FC, useEffect, useState } from 'react';
import './menu.scss';
import myselfImg from '../../../images/myself.jpeg';
import { Themes } from '../../../helpers/themes.enum';

const Menu: FC<{ theme: Themes, main: boolean }> = ({ theme, main }) => {

    const [extra, setExtra] = useState<boolean>(false);
    const [style, setStyle] = useState<string>("");

    const handleScroll: EventListener = (e: Event) => {
        setExtra((window.innerHeight - 80) < window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        setStyle((main) ? " stiky-top": " absolute-to-fixed");
    }, [main])


    return (
        <header className={'menu container-fluid ' + theme + ((extra && !main) ? " menu-attach" : "") + style}>
            <nav className='row align-items-center'>
                <ul className='col-xl-8 d-flex align-items-center size-bold-two'>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href='#experience'>Academic & work</a></li>
                    <li><a href='#projects'>Projects</a> </li>
                    <li><a href='#areas'>Development areas & languages</a></li>
                    <button className={"btn-primary  d-none d-xl-block contact-btn transition-1s " + ((extra) ? "visible" : "invisible")}> Contact me </button>
                </ul>

                <div className={'name-header col-xl-4 d-none d-xl-flex align-items-center justify-content-end size-bold-two ' + ((extra) ? "visible" : "invisible")}>
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