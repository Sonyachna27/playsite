
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCurrentPath } from './RouteForStep';
import { menuItems } from '../../const';
import '../roters/AboutUsTop.css';

const AboutUsTop = ({customStyle}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    dispatch(setCurrentPath(currentPath));
  }, [dispatch, currentPath]);

  const getPageTitle = () => {
    const page = menuItems.find((item) => item.to === currentPath);
    return page ? page.label : '';
  };
  const defaultStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "fit-content",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "208.5%", 
    marginBottom: 38,
  };
    
  const mergedStyle = { ...defaultStyle, ...customStyle };

  return (
    <div style={mergedStyle}>
      <h2 className='homepage'>Home &gt; <span className='step'>{getPageTitle()}</span></h2>
    </div>
  );
};

export default AboutUsTop;