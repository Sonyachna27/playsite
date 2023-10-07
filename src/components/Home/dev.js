import React from 'react';
import { devices, ArrowIcon } from '../../const';  
import './dev.css';


const Dev = () => {
    return (
        <section className='dev'>
            <div className='container'>
            <div className='dev__title-wrap'>
        <h2 className='dev__title'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h2>
        <p className='dev__paragraph'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        </div>
        <div className='dev__block'>
        {devices.map((item) => (
            <a href='#' className='dev__block-icon'>
               <div className='dev__icon'>
               <item.vector />
               </div>
               <span className='dev__text'>{item.text}</span>
               <ArrowIcon className='arrow'/>
            </a>
        ))}
        </div>
            </div>
        </section>
    );
};

export default Dev;