
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
const ContactForm = () => {
    const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jkg2ucj', 'template_fepzit', form.current, 'lrd6R_g1-NsCVeU93') //template_fepzit7
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
              form.current.reset();
          });
      };
  ;

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
         <label for='first_name'>First Name</label>
          <input type="text" name="user_name" id='first_name' />
         </div>
          <div className='name'>
          <label for='last_name'>Last Name</label>
          <input type="text" name="user_name" id='last_name' />
          </div>
          </div>
         <div className='email'>
         <label for='user_email'>Email Address</label>
          <input type="email" name="user_email" id='user_email' />
         </div>
          <div className='message'>
          <label for='message'>Message</label>
          <textarea name="message" id='message' />
          </div>
         <div className='submit-wrap'>
         <input type="submit" value="Get in touch" className='contact' />
         </div>
          
        </form>
            </div>
            </div>
            </div>
        </section>
    );
};

export default ContactForm;