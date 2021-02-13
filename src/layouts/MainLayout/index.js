import React from 'react';

import './../../styles/index.scss';
import Header from './../../components/Header';

const MainLayout = (props) => {
    return (
        <div className="mainLayout">
            <Header/>
            <div className="container">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default MainLayout;