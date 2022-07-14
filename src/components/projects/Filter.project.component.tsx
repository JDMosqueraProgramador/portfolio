import React from 'react'
import areas from '../../helpers/areas.helper';
import { IArea } from '../../interfaces/card-area.interface';
import AcordeonProject from './Acordeon.project.component';

let areasFilter: Array<IArea> = areas.slice();
areasFilter.pop();

const FilterProjects: React.FC<{ setSelected: any }> = ( { setSelected } ) => {

    return (
        <div className="col-xl-3 projects-filter">
            <input type="text" name="searchProject" id="searchProject" placeholder='Search any project' className='p-input margin-bottom-8' />

            {
                areasFilter.map((area, i) => <AcordeonProject key={i} title={area.title} technologies={area.technologies} setSelected={setSelected} />)
            }

        </div>
    )
}

export default FilterProjects;