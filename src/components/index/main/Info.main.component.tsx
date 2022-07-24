import React from 'react'
import programmerImg from "../../../images/programmer.svg"; 

const MainInfo = () => {
    return (
        <div className="col-md-6 information">
            <h1 className="margin-bottom-8 text-center">JUAN DAVID MOSQUERA MUÑOZ</h1>
            <h3 className="size-three margin-bottom-16 text-center">Computer Engineer</h3>

            <p className="size-three text-justify margin-bottom-16">Soy un estudiante apasionado por practicar deporte y por las computadoras. Actualmente me encuentro realizando mis estudios en ingeniería informática, cuento con muy buen manejo en el desarrollo web front-end y back-end, siempre estoy en busca de nuevos conocimientos que me permitan mejorar cada día más.</p>

            <a href='#contact' className="btn-primary ms-auto px-5 btn-main"> Contact me</a>
            <img src={programmerImg} className="programmer-draft d-md-block d-none" alt="" />

        </div>
    )
}

export default MainInfo;