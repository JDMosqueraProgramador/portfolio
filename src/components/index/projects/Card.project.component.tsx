import React from 'react';
import { ETag } from '../../../types/elements/tag.enum';
import './card.scss';
import Tag from '../../shared/Tag.project.component';
import { Link } from 'react-router-dom';

interface CardProjectProps {
    id: number,
    img: string,
    name: string,
    description: string,
    technologies: Array<string>
}

const CardProject: React.FC<CardProjectProps> = ({ id, img, name, description, technologies }) => {
        return (
            <div className='card-project'>
                <Link to={id.toString()}>
                    <img src={img} alt="" className='card-project-img' />

                    <div className='card-project-tech'>
                        <h4 className='text-size-bold-two margin-bottom-8'>Technologies</h4>
                        <div className="d-flex justify-content-center align-center flex-wrap">
                            {technologies.map((technology, i) => (
                                <Tag type={ETag.green} key={i} content={technology} />
                            ))}
                        </div>
                    </div>

                    <h3 className='card-project-name'>{name}</h3>

                    <p className='card-project-description'>{description}</p>
                </Link>
            </div>

        )
    }

export default CardProject;