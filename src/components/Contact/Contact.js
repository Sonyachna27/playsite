import React from 'react';
import AboutUsTop from '../roters/AboutUsTop';
import TopContent from '../roters/TopContent';
import StayInLoop from '../StayInLoop';
import './Contact.css';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
const Contact = () => {
    return (
        <main className='Contact-page'>
          <div className='container'>
          <div className='contact-top'>
          <AboutUsTop/>
          <TopContent />
          </div>
          </div>
          <ContactMap />
          <ContactForm />
        <div className='container'>
        <StayInLoop />
        </div>
        
        </main>
    );
};

export default Contact;