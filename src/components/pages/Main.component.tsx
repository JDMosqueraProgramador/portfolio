import React from "react";
import MainImage from "../main/Image.main.component";
import MainInfo from "../main/Info.main.component";
import MainMode from "../main/Mode.main.component";
import decorationImg from "../../images/decoration.svg";
import "./main.scss";

const Main: React.FC<{}> = () => {
    return (
        <main className="container-fluid d-flex">
            <div className="row">
                <MainMode />
                <MainImage />
                <MainInfo />
            </div>
            <img src={decorationImg} className="decoration" alt="" />
        </main>
    );
}

export default Main;