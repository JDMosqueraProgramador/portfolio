import React, { useEffect, useRef } from "react";
import MainImage from "../main/Image.main.component";
import MainInfo from "../main/Info.main.component";
import MainMode from "../main/Mode.main.component";
import decorationImg from "../../../images/decoration.svg";
import "./main.scss";

interface MainProps {
    setMain: Function
}

const Main: React.FC<MainProps> = ({ setMain }) => {

    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleResize = () => {
            let height: number = mainRef.current!.clientHeight;
            setMain(((height - 1) > window.innerHeight));
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [setMain]);

    return (
        <main ref={mainRef} className="container-fluid d-flex" id="about-me" >
            <div className="row xxl-screen">
                <MainMode />
                <MainImage />
                <MainInfo />
            </div>
            <img src={decorationImg} className="decoration" alt="" />
        </main>
    );
}

export default Main;