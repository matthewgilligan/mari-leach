import React from 'react';

import './styles.scss';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

const MainLayout = (props) => {
    return (
        <div className="container">
            <div className="content">
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};

export default MainLayout;