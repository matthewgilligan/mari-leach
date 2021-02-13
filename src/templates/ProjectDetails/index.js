import React from 'react';
import { Link, graphql } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './styles.scss';
import MainLayout from './../../layouts/MainLayout';
import RichText from './../../components/RichText';

export const query = graphql`
    query($slug: String!) {
        contentfulProject(slug: { eq: $slug }) {
            title
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

const ProjectDetails = ({ data, pageContext }) => {
    const { title, description, images } = data.contentfulProject;
    const { prev, next } = pageContext;

    console.log(pageContext);

    const json = JSON.parse(description.raw)

    const configRichText = {
        json: json,
    };

    return (
        <MainLayout>
            <div className="projectTemplate">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="body">
                    <div className="images">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        {images.map((image) => {
                            return <img src={image.file.url} alt={image.title} className="sliderimg" />
                        })}
                    </AliceCarousel>
                    </div>  
                    <div className="copy">
                        <RichText {...configRichText} />
                    </div>        
                </div>
                <div className="projectLinks">
                    <div className="previous">
                        {prev &&
                            <Link to={`/projects/${prev.slug}`}>
                                ⇺ Previous
                            </Link>
                        }
                    </div>
                    <div className="next">
                        {next &&
                            <Link to={`/projects/${next.slug}`}>
                                Next ⇻
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};

export default ProjectDetails;