import React, { useState } from 'react';
import AboutUsTop from '../roters/AboutUsTop';
import TopContent from '../roters/TopContent';
import './NewsTop.css';
const NewsTop = () => {
    return (
        <section className='news__top'>
           <div className='container'>
           <div className='news__top-wrap'>
           <AboutUsTop customStyle={{ fontSize: 16 }}/>
           <TopContent />
           </div>
           
           </div>
            
            
            </section>
    );
};

export default NewsTop;