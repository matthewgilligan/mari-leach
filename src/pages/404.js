import React from 'react';
import { Link } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import Head from './../components/Head';

const NotFound = () => {
    return (
        <div>
            <MainLayout>
                <Head title="Page Not Found" />
                <div className="notfound">
                    <h1>Not Found</h1>
                    <Link to="/">
                        Back to projects
                    </Link>
                </div>
            </MainLayout>
        </div>
    )
};

export default NotFound;