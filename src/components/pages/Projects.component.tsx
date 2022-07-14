import React, { useEffect, useState } from 'react';
import { arrayToLower } from '../../helpers/arrays.helper';
import { IProject } from '../../interfaces/project.interface';
import CardProject from '../projects/Card.project.component';
import FilterProjects from '../projects/Filter.project.component';
import './projects.scss';

const projects: Array<IProject> = [
    {
        img: "https://i.pinimg.com/564x/a7/31/97/a73197d9036e2ebcd9f26b464c903b69.jpg",
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat a tempora non minus labore totam vitae? Possimus exercitationem natus recusandae, adipisci ullam corporis, nemo eaque veritatis assumenda, ut molestias.",
        technologies: ["React", "Node JS", "scss", "HTML", "Figma"]
    },
    {
        img: "https://i.pinimg.com/564x/6d/90/32/6d90323e974582a404e131668029f4c1.jpg",
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat a tempora non minus labore totam vitae? Possimus exercitationem natus recusandae, adipisci ullam corporis, nemo eaque veritatis assumenda, ut molestias.",
        technologies: ["React", "Node JS", "scss", "HTML"]
    },
    {
        img: "https://i.pinimg.com/originals/c4/81/6d/c4816de81eaff70226cd908494b26684.gif",
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat a tempora non minus labore totam vitae? Possimus exercitationem natus recusandae, adipisci ullam corporis, nemo eaque veritatis assumenda, ut molestias.",
        technologies: ["React", "Node JS", "scss", "HTML"]

    },
    {
        img: "https://i.pinimg.com/564x/61/3d/7a/613d7a9760e0e2c8b708a2973a0a25e6.jpg",
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat a tempora non minus labore totam vitae? Possimus exercitationem natus recusandae, adipisci ullam corporis, nemo eaque veritatis assumenda, ut molestias.",
        technologies: ["React", "Node JS", "scss", "HTML"]

    },
    {
        img: "https://i.pinimg.com/originals/b0/be/46/b0be46c8af3e3948424246bbaceb564b.gif",
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat a tempora non minus labore totam vitae? Possimus exercitationem natus recusandae, adipisci ullam corporis, nemo eaque veritatis assumenda, ut molestias.",
        technologies: ["React", "Node JS", "scss", "HTML"]

    }
]

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
        <section className='container-fluid projects' id="projects">
            <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>PROJECTS AND FILTER</h2>
            <p className='size-xl-three-md-two text-center margin-bottom-32 container-xl'>Hover on a project to see its technologies or click on a project to see more. Select some technologies in the filter or enter the name in the input.</p>

            <div className="row">
                <FilterProjects setSelected={handleSelected} />

                <div className="col-xl-9 projects-list">
                    {
                        found.map((project, i) => (
                            <CardProject key={i} img={project.img} description={project.description} name={project.name} technologies={project.technologies} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;