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
            <Link to="/">Mari Leach</Link>
            <div className="info">
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">Contact</a>
            </div>
        </header>
    )
};

export default Header;