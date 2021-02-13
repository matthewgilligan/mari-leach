import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollHorizontal from 'react-scroll-horizontal';

import './styles.scss';
import Project from './Project';
import GlobalContextProvider, { GlobalStateContext } from './../../context/GlobalContextProvider';


const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject ( sort: { fields: creationDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        images {
                            title
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    const state = useContext(GlobalStateContext)
    console.log(state);
    const projects = data.allContentfulProject.edges;

    if (!Array.isArray(projects)) return null;
    if (projects.length < 1) {
        return (
            <div className="products">
                <p>
                    No projects at the moment!
                </p>
            </div>
        );
    };

    const projectItems = projects.map((project, pos) => {
        const { node } = project;

        const configProject = {
            ...node
        };

        return (
            <Project key={pos} {...configProject} />
        )
    });

    return (
        <GlobalContextProvider>
            <div className="projects">
                <div className="title">
                    <h1>{state.theme}</h1>
                </div>
                <ScrollHorizontal reverseScroll = { true }>
                    {projectItems}
                </ScrollHorizontal>
            </div>
        </GlobalContextProvider>
    )
        
};

export default Projects;