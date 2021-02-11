import React from 'react';

import './../../styles/index.scss';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const MainLayout = (props) => {
    return (
        <div className="mainLayout">
            <Header/>
            <div className="container">
                <div className="content">
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
};

export default MainLayout;