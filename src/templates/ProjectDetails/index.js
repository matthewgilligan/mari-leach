import React from 'react';
import { Link, graphql } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './styles.scss';
import MainLayout from './../../layouts/MainLayout';
import Head from './../../components/Head';
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
            video
        }
    }
`

const ProjectDetails = ({ data, pageContext }) => {
    const { title, description, images, video } = data.contentfulProject;
    const { prev, next } = pageContext;

    console.log(pageContext);

    const json = JSON.parse(description.raw)

    const configRichText = {
        json: json,
    };

    const media = images.map((image) => {
        return <img src={image.file.url} alt={image.title} className="sliderimg" />
    });

    if (video) {
        media.push(<iframe width="100%" height="350" src={video} frameborder="0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    }

    return (
        <MainLayout>
            <Head title={title} />
            <div className="projectTemplate">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="body">
                    <div className="images">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        {media}
                    </AliceCarousel>
                    </div>  
                    <div className="copy">
                        <RichText {...configRichText} />
                    </div>        
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
        </MainLayout>
    )
};

export default ProjectDetails;