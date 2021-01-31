import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const Header = () => {
    return (
        <header>
            <p>Mari Leach</p>
            <Link to="/about">About</Link>
        </header>
    )
};

export default Header;