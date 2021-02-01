import React from 'react';

import MainLayout from './../layouts/MainLayout';
import ProjectsPreview from './../components/ProjectsPreview';

const Home = () => {
    return (
        <div>
            <MainLayout>
                <ProjectsPreview/>
            </MainLayout>
        </div>
    )
};

export default Home;