import React, {useState, useEffect} from "react";
 import Vector from '../images/Group97.svg';
import { Link } from "react-router-dom";
import './Navbar.css';
import { menuItems } from "../const";
const Navbar = () => {
  const [showMessage, setShowMessage] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/playsite/" className="logo">
            LOGO
          </Link>
          <div className="nav">
            <ul className="header__list">
              {menuItems.map((item) => (
                <li
                  key={item.to}
                  className="header__list-link"
                  onMouseEnter={() => setShowMessage({ ...showMessage, [item.to]: true })}
                  onMouseLeave={() => setShowMessage({ ...showMessage, [item.to]: false })}
                  onClick={closeMenu} 
                >
                  <Link to={item.to}>{item.label}</Link>
                  {showMessage[item.to] && <img className="hoverAffect" src={Vector} alt="" />}
                </li>
              ))}
            </ul>
          </div>
          <div className="burger" onClick={handleBurgerClick}>
            <div className="icon"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
    

export default Navbar; 