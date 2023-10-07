import React from 'react';
import AboutTop from './AboutTop';
import './About.css'
import AboutUsTeam from './AboutUsTeam';
import AboutUsBottom from './aboutUsBottom';
const About = () => {
    return (
        <div className='about'>
        <AboutTop />
        <AboutUsTeam />
        <AboutUsBottom />
        </div>
    );
};

export default About;