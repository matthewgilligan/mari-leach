import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const Header = () => {
    return (
        <header>
            <div className="wrap">
                    <h1 className="siteTitle">
                        <Link to="/">Mari Leach</Link>
                        <span className="job">Graphic Designer</span>
                    </h1>

                <div className="nav">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;