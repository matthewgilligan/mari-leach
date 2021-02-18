import React from 'react';
import RichText from '../../RichText';

const EducationDetails = props => {
    const { institution, startDate, endDate } = props;
    
    return (
        <div>
            <h3 className="company">{institution}</h3>
            <p>{`(${startDate} - ${endDate})`}</p>
        </div>
    )
};

export default EducationDetails;
