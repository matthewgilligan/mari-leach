import React from 'react';

const ExperienceDetails = props => {
    const { company, institution, jobTitle, startDate, endDate } = props;

    return (
        <div>
            <h1>{company ? company : institution }</h1>
            <p>What about your Deutsch class? Was it a shambles.</p>
        </div>
    )
};

export default ExperienceDetails;