
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
const ContactForm = () => {
    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          // Отримуємо значення полів форми
          const firstName = form.current.querySelector('#first_name').value;
          const lastName = form.current.querySelector('#last_name').value;
          const email = form.current.querySelector('#user_email').value;
          const message = form.current.querySelector('#message').value;
      
         
          if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w+)$/.test(email)){
            alert('Введіть коректну адресу електронної пошти');
            return;
          }
          if (!/^[А-Яа-яA-Za-z]+$/.test(firstName)) {
            alert("Введіть коректне ім'я");
            return;
          }
      
        emailjs.sendForm('service_jkg2ucj', 'template_fepzit', form.current, 'lrd6R_g1-NsCVeU93') //template_fepzit7
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
              form.current.reset();
          });
      };
  

  return (
    <section className='ContactForm-section'>
      <div className='container'>
        <div className='contact-wrapper'>
          <h2>Say hello</h2>
          <p>Lorem Ipsum is simply dummy text of the printing. </p>
          <div className='form-wrapper'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='name-wrap'>
                <div className='name'>
                  <label htmlFor='first_name'>First Name</label>
                  <input type='text' name='user_name' id='first_name' minLength='3' required  />
                </div>
                <div className='name'>
                  <label htmlFor='last_name'>Last Name</label>
                  <input type='text' name='user_last_name' id='last_name' />
                </div>
              </div>
              <div className='email'>
                <label htmlFor='user_email'>Email Address</label>
                <input type='email' name='user_email' id='user_email' required  />
              </div>
              <div className='message'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' />
              </div>
              <div className='submit-wrap'>
                <input type='submit' value='Get in touch' className='contact' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;