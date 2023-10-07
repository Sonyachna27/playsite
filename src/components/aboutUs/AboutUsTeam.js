import React from 'react';
import { rectangle28 } from '../../const';
import './AboutUsTeam.css';
const AboutUsTeam = () => {
    return (
        <section className='about__team-section'>
            <div className='container'>
                <div className='about__team-wrap'>
                    <img src={rectangle28} alt='' />
                    <div className='about__team-text'>
                        <span>Lorem ipsum</span>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                         galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTeam;