import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Navbar.css"
const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="topnav">
            <ul>
                <li>
                    <a>{t("nav.home")}</a>
                </li>
                <li>
                    <a>{t("nav.about")}</a>
                </li>
                <li>
                    <a>{t("nav.map")}</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;