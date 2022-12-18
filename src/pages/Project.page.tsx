import React from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/navegation/Menu.component';
import ButtonsInfo from '../components/project/information/Buttons.info.component';
import LabelsInfo from '../components/project/information/Labels.info.component';
import RolInfo from '../components/project/information/Rol.info.component';
import Slider from '../components/project/slider/Slider.component';
import { projects } from '../helpers/projects.helper';
import './project.scss';


const Project: React.FC<{}> = () => {

    const { id } = useParams();

    const { name, description, technologies, links, rol, img } = projects[projects.findIndex(project => project.id === parseInt(id!))];

    return (

        <>
            <Menu alt={true} />
            <div className='container-fluid container-project xxl-screen'>
                <h2 className='text-center size-bold-xl-three-md-two margin-bottom-24 margin-top-24'>{name.toUpperCase()}</h2>

                <div className="row">
                    <div className="col-md-6">
                        <Slider pictures={img} />
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