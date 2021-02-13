import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import './styles.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulSiteMetaData {
                email
            }
        }
    `)

    const { email } = data.contentfulSiteMetaData;

    return (
        <header>
            <div className="wrap">
                <Link to="/">
                    <h1 className="siteTitle">Mari Leach   <span className="job">Graphic Designer</span></h1>
                </Link>
                <div className="nav">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;