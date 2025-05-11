import React from 'react';
import { useTranslation } from 'react-i18next';
const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">{t("navbar.home")}</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Map</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;