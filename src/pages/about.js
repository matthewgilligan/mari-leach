import React from 'react';

import MainLayout from './../layouts/MainLayout';
import AboutInfo from './../components/AboutInfo';
import Head from './../components/Head';

const About = () => {
    return (
        <div>
            <Head title="About" />
            <MainLayout>
                <AboutInfo/>
            </MainLayout>
        </div>
    )
};

export default About;