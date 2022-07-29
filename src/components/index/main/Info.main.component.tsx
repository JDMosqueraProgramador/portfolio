import React from 'react'
import programmerImg from "../../../images/programmer.svg"; 

const MainInfo = () => {
    return (
        <div className="col-md-6 information">
            <h1 className="margin-bottom-8 text-center">JUAN DAVID MOSQUERA MUÑOZ</h1>
            <h3 className="size-three margin-bottom-16 text-center">Computer Engineer</h3>

            <p className="size-three text-justify margin-bottom-16">I am an engineering student, passionate about solving problems through software. I am a developer, especially I make web systems. In addition, every day I find new knowledge that allows me to grow on a personal and intellectual level. My hobbies are sports and video games.</p>

            <a href='#contact' className="btn-primary ms-auto px-5 btn-main"> Contact me</a>
            <img src={programmerImg} className="programmer-draft d-md-block d-none" alt="" />

        </div>
    )
}

export default MainInfo;