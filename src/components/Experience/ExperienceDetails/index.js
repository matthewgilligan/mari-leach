import React from 'react';

const ExperienceDetails = props => {
    const { company, institution, jobTitle, startDate, endDate } = props;

    return (
        <div>
            <h1>{company ? company : institution }</h1>
            <p>{startDate} - {endDate}</p>
        </div>
    )
};

export default ExperienceDetails;