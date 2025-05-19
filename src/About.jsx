import React from 'react';
import { useTranslation } from 'react-i18next';
import "./About.css"
const About = () => {
    const { t } = useTranslation();
    return (
        <>
        <h1>{t("about.heading")}</h1>
        <p>{t("about.body")}</p>
        </>
    );
};

export default About;