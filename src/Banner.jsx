import React from 'react';
import { ReactSVG } from 'react-svg'
import bannerImg from "/src/assets/fetu-banner.svg"
const Banner = () => {
    return (
        <>
        <ReactSVG
         src={bannerImg}/>
        </>
    );
};

export default Banner;