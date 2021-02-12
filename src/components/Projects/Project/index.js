import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { title, slug, images } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`}>
                <img src={images[0].file.url} alt={images.title} className="previewImage"/>
            </Link>
        </div>
    )
};

export default Project;