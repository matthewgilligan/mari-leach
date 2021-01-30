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
    const { title, description, creationDate } = props.data.contentfulProject;

    const json = JSON.parse(description.raw)

    const configRichText = {
        json: json,
    };

    return (
        <MainLayout>
            <h1>{title}</h1>
            <p>{creationDate}</p>
            <RichText {...configRichText} />
        </MainLayout>
    )
};

export default ProjectDetails;