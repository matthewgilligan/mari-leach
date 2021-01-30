import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../../layouts/MainLayout';
import RichText from './../../components/RichText';

export const query = graphql`
    query($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            title
            creationDate(formatString: "MMMM Do, YYYY")
            description {
                raw
            }
        }
    }
`

const ProjectDetails = props => {
    const project = props.data.contentfulProject;

    const json = JSON.parse(project.description.raw)

    const configRichText = {
        json: json,
    };

    return (
        <MainLayout>
            <h1>{project.title}</h1>
            <p>{project.creationDate}</p>
            <RichText {...configRichText} />
        </MainLayout>
    )
};

export default ProjectDetails;