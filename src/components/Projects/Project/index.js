import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { slug, images, title } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`} >
                <img src={images[0].file.url} alt={images.title} className="image"/>
                <div className="overlay">
                    <h1>{title}</h1>
                </div>
            </Link>
        </div>
    )
};

export default Project;