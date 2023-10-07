import React from "react";
import { LayoutText } from "../layout";
import joy from '../../images/joy_stick.png'
import unity1 from '../../images/unity1.svg';
import cry from '../../images/cry.svg';
import unreal from '../../images/unreal.svg';
import './Home.css';
import Currently from "./currently";
import Dev from "./dev";
import Recent from "./recent";
const Home = () => {
    return(
       <>
        <section className="joy">
        <div className="container"> 
        
            <LayoutText />
            </div>
            <div className="joystick">
            <img className="joystick__img" src={joy} alt="" />
            <img className="unity1" src={unity1} alt=""/>      
            <img className="cry" src={cry} alt=""/>      
            <img className="unreal" src={unreal} alt=""/>  
            </div>
              </section>
              <Currently />
              <Dev />
              <Recent />
            </>
    )
}
export default Home;