import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { GlobalDispatchContext } from './../../../context/GlobalContextProvider';

const Project = (project) => {
    const dispatch = useContext(GlobalDispatchContext);
    const { title, slug, images } = project;

    const handleChangeTitle = (title) => {
        dispatch({
            type: "TOGGLE_THEME"
        });
    }

    return (
        <div className="project">
            <Link to={`/projects/${slug}`} className="thumbnail" onMouseEnter={() => handleChangeTitle(title)}>
                <img src={images[0].file.url} alt={images.title} className="image"/>
            </Link>
        </div>
    )
};

export default Project;