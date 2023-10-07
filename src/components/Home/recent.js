import React, { useState } from 'react';
import { images, ps } from '../../const';
import { Link } from 'react-router-dom';
import './recent.css';
import StayInLoop from '../StayInLoop';

const Recent = () => {
const [showImage, setShowImages] = useState({});
const myStyles = {
    backgroundColor: '#1C140F', 
};
    return (
        <section className='home__bottom'>
           <div className='container'>
                <div className='images__text'> 
                <h2 className='images__title'> 
                Our Recent Projects
                </h2>
                <p className='images__paragraph'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                </div>
                <div className='images__wrap'> 
                <div className='images__top'> {images.map((item)=>(
                <a href='#'
                key={item.img}
                className='images__link'
                onMouseEnter={() => setShowImages ({...showImage, [item.img]: true})}
                onMouseLeave={() => setShowImages ({...showImage, [item.img]: false})}
                >
                <img src={item.img} />
                </a>
                    ))}
                    </div>
                    <Link className='currently__link-top images__btn' to='/playsite/'> 
        SEE ALL
        </Link>
                    </div>
                    <StayInLoop style={myStyles}/>
           </div> 
        </section>
    );
};

export default Recent;