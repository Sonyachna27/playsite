import React from 'react';
import StayInLoop from '../StayInLoop';
import './PortfolioBottom.css';
const PortfolioBottom = () => {

    const myStyles = {
        backgroundColor: '#1B1B1B', 
    };
    return (
        <section className='portfolio__bottom'>
            <div className='container'>
            <StayInLoop style={myStyles} />
            </div>
        </section>
    );
};

export default PortfolioBottom;