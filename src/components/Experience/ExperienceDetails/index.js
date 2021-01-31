import React from 'react';

const ExperienceDetails = props => {
    const { company, institution, jobTitle, startDate, endDate } = props;

    return (
        <div className="experienceDetails">
            <h1>{company ? company : institution }</h1>
            {jobTitle && <p>{jobTitle}</p>}
            <p>{startDate} - {endDate}</p>
        </div>
    )
};

export default ExperienceDetails;