import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Navbar.css"
const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="topnav">
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;