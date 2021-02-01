import React from 'react';

import MainLayout from './../layouts/MainLayout';
import Projects from './../components/Projects';

const Home = () => {
    return (
        <div>
            <MainLayout>
                <Projects />
            </MainLayout>
        </div>
    )
};

export default Home;