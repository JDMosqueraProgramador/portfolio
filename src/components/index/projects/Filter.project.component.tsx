import React from 'react'
import { tags } from '../../../helpers/areas.helper';
import AcordeonProject from './Acordeon.project.component';

interface FilterProjectsProps {
    setSelected: Function
}

const FilterProjects: React.FC<FilterProjectsProps> = ({ setSelected }) => {

    return (
        <div className="col-xl-3">
            <div className='projects-filter'>

                <input type="text" name="searchProject" id="searchProject" placeholder='Search any project' className='p-input margin-bottom-8' />

                {
                    tags.map((area, i) => <AcordeonProject key={i} title={area.title} technologies={area.content} setSelected={setSelected} />)
                }
            </div>
        </div>
    )
}

export default FilterProjects;