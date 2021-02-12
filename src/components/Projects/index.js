import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ScrollHorizontal from 'react-scroll-horizontal';

import './styles.scss';
import Project from './Project';

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
        <div className="projects">
          <ScrollHorizontal>
            {projectItems}
        </ScrollHorizontal>
        </div>
        
    )
};

export default Projects;