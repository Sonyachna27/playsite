import React, { useState } from 'react';
import AboutUsTop from '../roters/AboutUsTop';
import { ArrowBtn } from '../../const';
import AboutSwiper from './AboutSwiper';
import './AboutTop.css'
import TopContent from '../roters/TopContent';
 const cardTextStyles =  {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 8,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    background: `#B000DC`, 
    lineHeight: "180%",
    width: 140,
    paddingLeft: "14px",
    marginBottom: "19px", 
}
const AboutTop = () => {
    return (
        <section className='about__top'>
           <div className='container'>
          <div className='top-container'>
          <div className='about__top-content'>
                    <AboutUsTop />
                    {<TopContent
                    paragraph= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />}
                    <button className='about__top-btn'>
                    Get in touch
                    <ArrowBtn />
                    </button>
                </div>
                <AboutSwiper />
          </div>
            <div className='about__info-wrapper'>
                <h3 className='about__info-title'>
                Why work with us
                </h3>
              <div className='about__cards-wrapper'>
                    <div className='about__card'>
                        <span style={{ ...cardTextStyles, background: "#B000DC" }}>
                        Lorem ipsum
                        </span>
                        <h3 className='about__card-title'>
                        Lorem Ipsum
                        </h3>
                        <p className='about__card-paragraph'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <div className='about__card'>
                          <span style={{ ...cardTextStyles, background: "#DC4200" }}>
                            Lorem ipsum
                          </span>
                          <h3 className='about__card-title'>
                            Lorem Ipsum
                          </h3>
                          <p className='about__card-paragraph'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                    <div className='about__card'>
                        <span style={{ ...cardTextStyles, background: "#00DC8D" }}>
                          Lorem ipsum
                        </span>
                        <h3 className='about__card-title'>
                          Lorem Ipsum
                        </h3>
                        <p className='about__card-paragraph'>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                </div>
            </div>
            </div>          
        </section>
    );
};

export default AboutTop;