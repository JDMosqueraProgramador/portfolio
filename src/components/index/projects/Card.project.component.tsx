import React from 'react';
import './card.scss';
import Tag from './Tag.project.component';

const CardProject:
    React.FC<{ img: string, name: string, description: string, technologies: Array<string> }>
    = ({ img, name, description, technologies }) => {
        return (
            <a href={"http://localhost:3000"} className='card-project'>

                <img src={img} alt="" className='card-project-img' />

                <div className='card-project-tech'>
                    <h4 className='text-size-bold-two margin-bottom-8'>Technologies</h4>
                    <div className="d-flex justify-content-center align-center flex-wrap">
                        {technologies.map((technology, i) => (
                            <Tag key={i} content={technology} />
                        ))}
                    </div>
                </div>

                <h3 className='card-project-name'>{name}</h3>

                <p className='card-project-description'>{description}</p>
            </a>
        )
    }

export default CardProject;