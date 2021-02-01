import React from 'react';

import MainLayout from './../layouts/MainLayout';
import AboutInfo from './../components/AboutInfo';
import Experience from './../components/Experience';

const About = () => {
    return (
        <div>
            <MainLayout>
                <AboutInfo/>
                <Experience />
            </MainLayout>
        </div>
    )
};

export default About;