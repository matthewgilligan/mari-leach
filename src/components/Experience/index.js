import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';
import ExperienceDetails from './ExperienceDetails';
import EducationDetails from './EducationDetails';

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulExperience {
                edges {
                    node {
                        company
                        jobTitle
                        jobDescription {
                            raw
                        }
                        startDate(formatString: "MM/YYYY")
                        endDate(formatString: "MM/YYYY")
                    }
                }
            }
            allContentfulEducation {
                edges {
                    node {
                        institution
                        startDate(formatString: "YYYY")
                        endDate(formatString: "YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <div className="experience">
                <h2 className="section">Experience</h2>
                {data.allContentfulExperience.edges.map((experience, pos) => {
                    const { node } = experience;

                    const configExperience = {
                        ...node
                    };

                    return (
                        <ExperienceDetails key={pos} {...configExperience} />
                    )
                })}
            </div>

            <div className="education">
                <h2 className="section">Education</h2>
                {data.allContentfulEducation.edges.map((education, pos) => {
                    const { node } = education;

                    const configEducation = {
                        ...node
                    };

                    return (
                        <EducationDetails key={pos} {...configEducation} />
                    )
                })}
            </div>
        </div>
    )
};

export default Experience; 