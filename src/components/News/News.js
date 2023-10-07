import React from 'react';
import NewsTop from './NewsTop';
import Search from './Search';
import StayInLoop from '../StayInLoop'
const News = () => {
    return (
<div className='news-page'>
    <NewsTop />
    <Search />
    <section className='news-bottom'>
      <div className='container'>
      <StayInLoop />
      </div>
    </section>
    
  </div>
    );
};
export default News;