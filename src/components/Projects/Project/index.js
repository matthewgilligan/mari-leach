import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
    return (
        <div className="project">
            <Link to={`/projects/${project.node.slug}`}>
                <h2 className="title">{project.node.title}</h2>
            </Link>
        </div>
    )
};

export default Project;