import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useHorizontalScroll } from "./useSideScroll";

import './styles.scss';
import Project from './Project';

const ProjectsPreview = () => {
    const scrollRef = useHorizontalScroll();

    const data = useStaticQuery(graphql`
        query {
            allContentfulProject ( sort: { fields: creationDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        images {
                            title
                            fluid(maxWidth: 980) {
                                ...GatsbyContentfulFluid
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
            <div className="projects">
                <p>
                    No projects at the moment!
                </p>
            </div>
        );
    };

    const mystyle = {
        width: "100%",
        display: "flex",
        whiteSpace: "nowrap"
      };

    return (
        <div ref={scrollRef} style={{ width: 1000, overflow: "auto" }}>
            <div style={mystyle} className="wrap">
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
        </div>
    )
};

export default ProjectsPreview;
