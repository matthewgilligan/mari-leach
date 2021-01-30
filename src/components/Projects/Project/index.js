import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    const { title, slug } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`}>
                <h2 className="title">{title}</h2>
            </Link>
        </div>
    )
};

export default Project;