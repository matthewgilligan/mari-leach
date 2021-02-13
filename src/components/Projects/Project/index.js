import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { slug, images } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`} className="thumbnail">
                <img src={images[0].file.url} alt={images.title} className="image"/>
            </Link>
        </div>
    )
};

export default Project;