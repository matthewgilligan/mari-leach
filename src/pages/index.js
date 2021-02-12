import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

import MainLayout from './../layouts/MainLayout';
import Projects from './../components/Projects';

const child = { width: `300em`, height: `100%`};

const Home = () => {
    return (
        <MainLayout>
            <Projects />
        </MainLayout>
    )
};

export default Home;