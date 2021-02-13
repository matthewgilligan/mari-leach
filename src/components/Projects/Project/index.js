import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { title, slug, images } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`} className="thumbnail">
                <img src={images[0].file.url} alt={images.title} className="image"/>
            </Link>
            <h1 className="title">{title}</h1>
        </div>
    )
};

export default Project;