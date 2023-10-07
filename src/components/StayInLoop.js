import React from 'react';
import SubscriptionForm from '../Form/Form';
import './stayInLooop.css';

const StayInLoop = ({ style }) => { 
    return (
        <div className='recent__content'> 
            <div className='bottom__loop'>
                <h3 className='bottom__title'>
                    Lorem Ipsum
                </h3>
                <p className='loop__paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
            <div className='bottom__form-wrap' style={style}>
                <div className='bottom__form-text'>
                    <h3 className='form__title'> Stay in the loop</h3>
                    <p className='form__paragraph'>
                        Subscribe to receive the latest news and updates about TDA. We promise not to spam you!
                    </p>
                </div> 
                <SubscriptionForm />
            </div>
        </div>
    );
};

export default StayInLoop;
