import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';
import Project from './Project';

const ProjectsPreview = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject ( sort: { fields: creationDate, order: DESC }, limit: 3 ) {
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

    return (
        <div className="projects">
            {projects.map((project, pos) => {
                const { node } = project;

                const configProject = {
                    ...node
                };

                return (
                    <Project key={pos} {...configProject} />
                )
            })};
        </div>
    )
};

export default ProjectsPreview;