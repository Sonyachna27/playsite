import React from 'react';
import PortfolioTop from './PortfolioTop';
import PortfolioBlock from './PortfolioBlock';
import PortfolioSlider from './PortfolioSlider';
import StayInLoop from '../StayInLoop';
import PortfolioBottom from './PortfolioBottom';


const Portfolio = () => {
    return (
        <div className='portfolio'>
         <PortfolioTop />
         <PortfolioBlock />
         <PortfolioSlider />
         <PortfolioBottom />
        </div>
    );
};

export default Portfolio;