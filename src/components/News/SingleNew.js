import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { AllNews, SingleNews } from '../../const';
import './SingleNews.css';
const SingleNew = () => {
    let id = useParams();
    const idNumber = Number(id.id);
    const newsItem = AllNews.find((el) => el.id === Number(idNumber) );   
    return (
     <section className='singlePageNews'>
<div className='container'>
<div className='singlePageNews-wrap'>
     <img src={newsItem.img} />
        <div className='page-news'>
        <h2>{newsItem.title}</h2> 
        <p>{newsItem.author}</p>
        <p>{newsItem.paragraph}</p> 
        </div>
         
       </div>
</div>
       </section>
    )
};

export default SingleNew;