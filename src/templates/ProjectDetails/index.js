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
            images {
                title
                file {
                    url
                }
            }
        }
    }
`

const ProjectDetails = props => {
    const { title, description, creationDate, images } = props.data.contentfulProject;

    const json = JSON.parse(description.raw)

    const configRichText = {
        json: json,
    };

    return (
        <MainLayout>
            <h1>{title}</h1>
            <p>{creationDate}</p>
            <RichText {...configRichText} />
            
            {images.map((image) => {
                return <img src={image.file.url} alt={image.title} />
            })}

        </MainLayout>
    )
};

export default ProjectDetails;