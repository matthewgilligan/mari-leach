import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Project = (project) => {
    const { slug, images, title } = project;

    return (
        <div className="project">
            <Link to={`/projects/${slug}`} >
                <h2 className="title">{title}</h2>
                <div className="image">
                    <Img 
                        fluid={images[0].fluid}
                        key={images[0].fluid.src}
                        alt={images[0].title}
                        style={{ height: "100%", width: "100%" }}
                        imgStyle={{ objectFit: "cover" }}
                    />
                </div>
                {/* <img src={images[0].file.url} alt={images.title} className="image"/> */}
                <div className="overlay">
                    <h1>{title}</h1>
                </div>
            </Link>
        </div>
    )
};

export default Project;