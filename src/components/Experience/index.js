import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';
import ExperienceDetails from './ExperienceDetails';

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulExperience {
                edges {
                    node {
                        company
                        jobTitle
                        startDate(formatString: "MMMM Do, YYYY")
                        endDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
            allContentfulEducation {
                edges {
                    node {
                        institution
                        startDate(formatString: "MMMM Do, YYYY")
                        endDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            {data.allContentfulExperience.edges.map((experience, pos) => {
                const { node } = experience;

                const configExperience = {
                    ...node
                };

                return (
                    <ExperienceDetails key={pos} {...configExperience} />
                )
            })}
            
            {data.allContentfulEducation.edges.map((education, pos) => {
                const { node } = education;

                const configEducation = {
                    ...node
                };

                return (
                    <ExperienceDetails key={pos} {...configEducation} />
                )
            })}
        </div>
    )
};

export default Experience;