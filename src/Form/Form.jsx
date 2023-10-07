import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './formemail.css';
const SubscriptionForm = props => {
  const { handleSubmit } = props;

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form__wrap'>
        {/* <label className='form__email' htmlFor="email">Enter email address</label> */}
        <Field className='form__email-input' name="email" component="input" type="email" placeholder='Enter email address'/>
        <button className='form__email-sub' type="submit">Continue</button>
      </div>
      
    </form>
  );
};

export default reduxForm({
  form: 'subscriptionForm' 
})(SubscriptionForm);