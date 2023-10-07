import React, { Fragment, useState } from 'react';
import { layoutImg } from '../const';
import './layout.css';

export const LayoutText = () => {
    const [isShown, setIsShown] = useState(false);

    return( 
        <div className="layout__text-wrap currently__text-wrap">
        <span className="layout__game">3D game Dev </span>
        <h1> Work that we produce for our clients</h1>
        <p className="layout__paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </p>
        <button 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="details"> Get more details</button>
        </div>
    )
}
const layout = () => {
    return (
        <div className="layout">
         <div className="container">
       <div className='layout__wrap'> 
        <LayoutText />
        
            <img className="layout__img" src={layoutImg} alt='image of Game'/>
        
         </div>  
         </div> 
        </div>
    );
};


export default layout;