import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import bannerImgEn from "/src/assets/fetu-banner-en.svg"

const Banner = () => {
    const { t } = useTranslation();

    const images = {
        en: bannerImgEn
    };
    const bannerSrc = images[t.language] || bannerImgEn
    return (
        <>
        <ReactSVG
         src={bannerSrc}/>
        </>
    );
};

export default Banner;