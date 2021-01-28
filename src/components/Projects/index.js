import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject ( sort: { fields: creationDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
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
    }

    return (
        <div className="projects">
            {projects.map((project) => {
                return (
                    <div className="project">
                        <h2 className="title">{project.node.title}</h2>
                    </div>
                )
            })}
        </div>
    )
};

export default Home;