import React from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/navegation/Menu.component';
import ButtonsInfo from '../components/project/information/Buttons.info.component';
import LabelsInfo from '../components/project/information/Labels.info.component';
import RolInfo from '../components/project/information/Rol.info.component';
import Slider from '../components/project/slider/Slider.component';
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

const pictures: Array<string> = [
    "https://i.pinimg.com/564x/a7/31/97/a73197d9036e2ebcd9f26b464c903b69.jpg",
    "https://i.pinimg.com/564x/6d/90/32/6d90323e974582a404e131668029f4c1.jpg",
    "https://i.pinimg.com/originals/c4/81/6d/c4816de81eaff70226cd908494b26684.gif",
    "https://i.pinimg.com/564x/61/3d/7a/613d7a9760e0e2c8b708a2973a0a25e6.jpg",
    "https://i.pinimg.com/originals/b0/be/46/b0be46c8af3e3948424246bbaceb564b.gif"
]

const Project: React.FC<{}> = () => {

    const { id } = useParams();

    const { name, description, technologies, links, rol } = projects[projects.findIndex(project => project.id === parseInt(id!))];

    return (

        <>
            <Menu alt={true} />
            <div className='container-fluid container-project'>
                <h2 className='text-center size-bold-xl-three-md-two margin-bottom-24 margin-top-24'>{name.toUpperCase()}</h2>

                <div className="row">
                    <div className="col-md-6">
                        <Slider pictures={pictures} />
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