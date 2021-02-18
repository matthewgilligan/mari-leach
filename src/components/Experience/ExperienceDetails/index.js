import React from 'react';
import RichText from './../../RichText';

const ExperienceDetails = props => {
    const { company, jobTitle, jobDescription, startDate, endDate } = props;
    
    const json = JSON.parse(jobDescription.raw)

    const configRichText = {
        json: json,
    };

    return (
        <div>
            <h3 className="company">{company}</h3>
            <h3 className="jobTitle">{jobTitle}</h3>
            <p>{`(${startDate} - ${endDate})`}</p>
            <RichText {...configRichText} />
        </div>
    )
};

export default ExperienceDetails;
