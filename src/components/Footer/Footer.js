import React, { useState } from 'react';
import ContactForm from '../../store/store';
import SubscriptionForm from '../../Form/Form';

import './footer.css';

import { Link } from 'react-router-dom';
import { links, social } from '../../const';

const Footer = () => {

    const [showHover, setShowHover] = useState({});
    return (
        <footer className='footer'>
        
        <div className='container'> 
        <div className='footerbar__wrap'>
        <div className='footerbar__block-wrap'>
            <div className='footerbar__block logo__block'>
            <Link to="/playsite/" className="logo">LOGO</Link>
            <p className='footerbar__paragraph'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>  
            <span > @Logo</span>
            </div>
            <div className='footerbar__block'>
            <ul className='footerbar__list'>
            {links.map((item) => (
            <li
              key={item.to}
              className="footerbar__list-link"
              onMouseEnter={() => setShowHover({ ...showHover, [item.to]: true })}
              onMouseLeave={() => setShowHover({ ...showHover, [item.to]: false })}
            >
              <Link to={item.to} key={item.to}>{item.label}</Link>
              {showHover[item.to] }
            </li>
          ))}
        </ul>

            </div>
            <div className='footerbar__block'>
                <Link to='/playsite/contact'>Contact us</Link>
                <p className='footerbar__contact-p'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <a href='tel:+908 89097 890'> +908 89097 890</a>
            </div>
            <div className='footerbar__block'>
                {social.map((item)=>(
                    <a className='social-block' href={item.to} key={item.to}>
                        <item.icon />
                    </a>
                ))}

            </div>

        </div>
        <div className='footerbar-copyright'>
        Copyright ® 2021 Lorem All rights Rcerved
        </div>
        </div>


            </div>
            {/* <div className='footer__line'></div>  */}
        </footer>
    );
};

export default Footer;