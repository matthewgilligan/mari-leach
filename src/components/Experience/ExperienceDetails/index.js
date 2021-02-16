import React from 'react';

const ExperienceDetails = props => {
    const { company, institution, jobTitle, startDate, endDate } = props;

    return (
        <div>
            <h3>{company ? company : institution }</h3>
            <p>What about your Deutsch class? Was it a shambles.</p>
        </div>
    )
};

export default ExperienceDetails;
