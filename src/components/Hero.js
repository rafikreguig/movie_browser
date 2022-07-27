import React from 'react';

const Hero = ({ text, backdropPath }) => {
    const backdrop = `https://image.tmdb.org/t/p/original${backdropPath}`
    return (
        <div className='conta text-white p-5 rounded-bottom'>
            <h1 className='hero-title'>{text}</h1>
            <div className='backdrop--img' style={{backgroundImage:`url(${backdrop})` }}></div>
        </div>
    );
}

export default Hero;
