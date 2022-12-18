import React, { useEffect, useState } from 'react';
import { arrayToLower } from '../../../pipes/arrays.pipes';
import { IProject } from '../../../types/elements/project.interface';
import CardProject from '../projects/Card.project.component';
import FilterProjects from '../projects/Filter.project.component';
import { projects } from '../../../helpers/projects.helper'; 
import './projects.scss';

const Projects: React.FC<{}> = () => {

    const [selected, setSelected] = useState<Array<string>>([]);
    const [found, setFound] = useState<Array<IProject>>([]);

    useEffect(() => {
        setFound((selected.length > 0) ? projects.filter(project => arrayToLower(selected).every(tag => arrayToLower(project.technologies).includes(tag))) : projects);
    }, [selected]);

    const handleSelected = (tech: string) => {
        setSelected(selected?.includes(tech) ? selected.filter(select => select !== tech) : [...selected, tech]);
    }

    return (
        <section className='container-fluid projects xxl-screen' id="projects">
            <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>PROJECTS AND FILTER</h2>
            <p className='size-xl-three-md-two text-center margin-bottom-32 container-xl'>Hover on a project to see its technologies or click on a project to see more. Select some technologies in the filter or enter the name in the input.</p>

            <div className="row">
                <FilterProjects setSelected={handleSelected} />

                <div className="col-xl-9 projects-list">
                    {
                        found.map((project, i) => (
                            <CardProject key={i} id={project.id!} img={project.img[0]} description={project.description} name={project.name} technologies={project.technologies} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;