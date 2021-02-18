import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';
import Experience from './../Experience';
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
            contentfulProject(slug: { eq: "confrontation" }) {
                images {
                    title
                    file {
                        url
                    }
                }
            }
        }
    `)

    const { bio } = data.contentfulSiteMetaData;
    const { images } = data.contentfulProject;

    const json = JSON.parse(bio.raw)

    const configRichText = {
        json: json,
    };

    return (
        <div className="about">
            <div className="title">
                <h1>Hello!</h1>
            </div>
            <div className="body"> 
                <div className="copy">
                    <RichText {...configRichText} />
                </div>
                <div className="expEd">
                    <Experience />
                    <p className="down">⇟</p>
                </div>         
            </div>
        </div>
    )
};

export default AboutInfo;