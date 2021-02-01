import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Project = (project) => {
    const { title, slug, images } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`}>
                <h2 className="title">{title}</h2>
                <Img 
                    fluid={images[0].fluid} 
                    key={images[0].fluid.src}
                    alt={images[0].title}>
                </Img> 
            </Link>
        </div>
    )
};

export default Project;