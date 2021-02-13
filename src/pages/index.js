import React from 'react';

import MainLayout from './../layouts/MainLayout';
import Head from './../components/Head';
import Projects from './../components/Projects';

const Home = () => {
    return (
        <MainLayout>
            <Head title="Projects" />
            <Projects />
        </MainLayout>
    )
};

export default Home;