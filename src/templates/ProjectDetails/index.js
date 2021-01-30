import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../../layouts/MainLayout';

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      creationDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const ProjectDetails = props => {
    return (
        <MainLayout>
            <h1>{props.data.contentfulProject.title}</h1>
            <p>{props.data.contentfulProject.creationDate}</p>
        </MainLayout>
    )
};

export default ProjectDetails;