import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';
import RichText from './../RichText';

const AboutInfo = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulSiteMetaData {
                title
                bio {
                    raw
                }
            }
        }
    `)

    const { title, bio } = data.contentfulSiteMetaData;

    const json = JSON.parse(bio.raw)

    const configRichText = {
        json: json,
    };

    return (
        <div>
            <h1>{title}</h1>
            <RichText {...configRichText} />
        </div>
    )
};

export default AboutInfo;