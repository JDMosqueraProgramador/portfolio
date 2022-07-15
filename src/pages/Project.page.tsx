import React from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/index/navegation/Menu.component';
import ButtonsInfo from '../components/project/information/Buttons.info.component';
import LabelsInfo from '../components/project/information/Labels.info.component';
import RolInfo from '../components/project/information/Rol.info.component';
import { IProject } from '../interfaces/project.interface';
import './project.scss';


const projects: Array<IProject> = [{
    id: 1,
    name: "Peluditos San Cristóbal",
    img: "",
    description: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    technologies: ["HTML", "CSS", "Node JS"],
    links: [{ name: "Figma", url: "https://www.figma.com" }, { name: "Git", url: "https://www.github.com" }],
    rol: "Full-stack Developer"
}]

const Project: React.FC<{}> = () => {

    const { id } = useParams();

    const { name, description, technologies, links, rol } = projects[projects.findIndex(project => project.id === parseInt(id!))];

    return (

        <>
            <Menu main={true} />
            <div className='container-xl'>
                <h2 className='text-center size-bold-xl-three-md-two margin-bottom-16 margin-top-24'>{name.toUpperCase()}</h2>

                <div className="row">
                    <div className="col-md-6">

                    </div>

                    <div className="col-md-6 text-center project-info">
                        <p className='text-center size-xl-three-md-two margin-bottom-16'>{description}</p>
                        <RolInfo content={rol!} />
                        <LabelsInfo technologies={technologies} />
                        <ButtonsInfo buttons={links!} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Project;