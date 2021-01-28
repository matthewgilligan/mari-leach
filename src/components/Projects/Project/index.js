import React from 'react';

const Project = (project) => {
    return (
        <div className="project">
            <h2 className="title">{project.node.title}</h2>
        </div>
    )
};

export default Project;