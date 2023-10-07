import React from 'react';
import './currently.css';
import { rectangle, spider, LittleBtnIcon } from '../../const';
import { Link } from 'react-router-dom';
const Currently = () => {

    return (
        <section className='currently'>
        
         <div className='container'> 
         <div className='currently__section-wrap'> 
         <div className='currently__title-wrap'> 
         <h2 className='currently__title-top'> Currently Trending Games</h2>  
        <Link className='currently__link-top' to='/playsite/'> 
        SEE ALL
        </Link>
         </div>
         <div className='currently__wrap'>
        {rectangle.map((item) => (
            <a href='#' className='currently__item'>
            
            <img className='currently__img' src={item.img} alt=''/> 
            
            <div className='currently__bottom'>
            <item.icon />
            <span className='currently__span'> {item.follower}</span>
            </div>
        </a>
        ))}
         </div>
            <h2 className='currently__title'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <div className='spider__wrap'> 
            
            <div className='spider__title-wrap'> 
            <h3 className='spider__title'>
            Lorem Ipsum
            </h3>
            <p className='spider__paragraph'>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s,
            </p>
            </div>
            <LittleBtnIcon className="knob" />
            <img className="spider__img"src={spider} alt='' />

            </div> 
            </div> 
         </div>
        </section>
    );
};

export default Currently;