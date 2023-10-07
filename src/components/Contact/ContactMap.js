import React from 'react';
import { Gps1, HugeMap, Phone1, social } from '../../const';
import './ContactMap.css';
const ContactMap = () => {
    return (
        <section className='map-section'>
        <div className='container'>
            <div className='map'>
                <img src={HugeMap} className='map-img' alt='Huge map of contact center' />
            <div className='map-content'>
                <div className='contact-item'>
                    <span>Follow</span>
                    <div className='contact-block'>
                    {social.map((item)=>(
                    <a className='social-block' href={item.to} key={item.to}>
                        <item.icon />
                    </a>
                ))}
                    </div>
                </div>
                <div className='contact-item'>
                <Phone1 />
                    <a href='tel:+94 4444 5555 6'> 
                    
                    +94 4444 5555 6</a>
                </div>
                <div className='contact-item'>
                    <Gps1 />
                    <p>
                    but also the leap into electronic typesetting
                    </p>
                    
                </div>
            </div>
                
            </div>

        </div>            
        </section>
    );
};

export default ContactMap;