import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const Header = () => {
    return (
        <header>
            <Link to="/">Mari Leach</Link>
            <Link to="/about">About</Link>
        </header>
    )
};

export default Header;