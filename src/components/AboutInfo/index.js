import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';

const AboutInfo = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulSiteMetaData {
                title
            }
        }
    `)

    return (
        <div>
            <h1>{data.contentfulSiteMetaData.title}</h1>
        </div>
    )
};

export default AboutInfo;