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
                <div className="images">
                    <img src={images[0].file.url} alt={images[0].title} className="sliderimg" />
                    <p>{images[0].title}</p>
                </div>  
                <div className="copy">
                    <RichText {...configRichText} />
                </div>        
            </div>
        </div>
    )
};

export default AboutInfo;