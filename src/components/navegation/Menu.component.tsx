import React, { FC, useEffect, useState } from 'react';
import './menu.scss';
import myselfImg from '../../images/myself.jpeg';
import { Themes } from '../../helpers/themes.enum';
import { ThemeContext } from '../../context/themes.context';
import { Link } from 'react-router-dom';

const Menu: FC<{ main?: boolean, alt: boolean }> = ({ main, alt }) => {

    const [extra, setExtra] = useState<boolean>(false);
    const [style, setStyle] = useState<string>("");

    const handleScroll: EventListener = (e: Event) => {
        setExtra((window.innerHeight - 80) < window.pageYOffset);
    }

    useEffect(() => {
        if (!alt) {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            }
        } else {
            setExtra(true);
        }
    }, [alt]);

    useEffect(() => {
        setStyle((main || main === undefined) ? " stiky-top" : " absolute-to-fixed");
    }, [main]);

    return (

        <ThemeContext.Consumer>
            {({ theme }) => (
                <header className={'menu container-fluid ' + theme + ((extra && !main && !alt) ? " menu-attach" : "") + style}>
                    <nav className='row align-items-center'>

                        {
                            (alt) ?
                                <div className="col-xl-8">
                                    <Link className='btn-primary alt-btn' to="/">Go back</Link>
                                    {/* <button className='btn-primary'></button> */}
                                </div>
                                :
                                <ul className={'col-xl-8 align-items-center size-bold-two d-flex'}>
                                    <li><a href="#about-me">About me</a></li>
                                    <li><a href='#experience'>Academic & work</a></li>
                                    <li><a href='#areas'>Development areas & languages</a></li>
                                    <li><a href='#projects'>Projects</a> </li>
                                    <button className={"btn-primary  d-none d-xl-block contact-btn transition-1s " + ((extra) ? "visible" : "invisible")}> <a href="#contact"> Contact me </a></button>
                                </ul>
                        }

                        <div className={'name-header col-xl-4 d-none d-xl-flex align-items-center justify-content-end size-bold-two ' + ((extra) ? "visible" : "invisible")}>
                            <img src={myselfImg} className="myself margin-right-8" alt="" />
                            <span style={{
                                color: (theme === Themes.dark) ? "white" : "inherit"
                            }}>Juan David Mosquera Muñoz</span>
                        </div>

                    </nav>
                </header>
            )}
        </ThemeContext.Consumer>

    );
}

export default Menu;