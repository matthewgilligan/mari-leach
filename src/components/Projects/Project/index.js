import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { title, slug, images } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`}>
                <h2 className="title">{title}</h2>
                <img src={images[0].file.url} alt={images.title}/>
            </Link>
        </div>
    )
};

export default Project;