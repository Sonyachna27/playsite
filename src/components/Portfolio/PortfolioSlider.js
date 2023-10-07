 import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard, } from 'swiper/modules';


import './PortfolioSwiper.css';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

import {  ArrowFillComponent, ArrowBackComponent, SwiperContent } from '../../const';
import { useRef } from 'react';

const PortfolioSlider = () => {
  const swiperRef = useRef(null); 
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();  
    }
  };
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); 
    }
  };
  
  return (
        <section className='portfolio__swiper'>
       <div className='container'>
       <div className='swiper__title'>
            <h2>Trusted by Thousands of Happy Customer</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
        </div>

          <Swiper
          // spaceBetween={50}
          //   slidesPerView={3}
            loop={true}
            cssMode={true}       
            navigation={{
            nextEl: '.my-swiper-button-next-1',
            prevEl: '.my-swiper-button-prev-1',
          }}
          pagination={{
          clickable: true,
        }}
        breakpoints= {
    {
    360: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 40
    }
        }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >

{SwiperContent.map((slide)=> (
        <SwiperSlide className="swiper__items"key={slide.userName}>
        <div className='portfolio__slide'>
                    <div className='top'>
                        <img className="slide__images" src={slide.images} alt='user' />
                        <div className='info'>
                            <div className='name'>
                               <span className='userName'>{slide.userName}</span>
                               <span className='userAddress'>{slide.userAddress} </span> 
                            </div>
                            <div className='mark'>{slide.mark} 
                            <slide.starImg />
                            </div> 
                        </div>
                    </div>
                   <p className='slide__text'> {slide.text}</p>
                </div>  
      </SwiperSlide>
    ))}
    <button className="my-swiper-button-prev-1" onClick={handlePrevClick}>
  <ArrowFillComponent />
</button>
<button className="my-swiper-button-next-1" onClick={handleNextClick}>
  <ArrowBackComponent />
</button>
          </Swiper>
       </div>
       
          
        </section>
      );
    }

export default PortfolioSlider;
