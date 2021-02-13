import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { GlobalDispatchContext } from './../../../context/GlobalContextProvider';

const Project = (project) => {
    const dispatch = useContext(GlobalDispatchContext);
    const { slug, images } = project;

    return (
        <div className="project">
            <button
                type="button"
                onClick={() => {
                    dispatch({ type: "TOGGLE_THEME" })
                }}>
                    Toggle
                </button>
            <Link to={`/projects/${slug}`} className="thumbnail">
                <img src={images[0].file.url} alt={images.title} className="image"/>
            </Link>
        </div>
    )
};

export default Project;