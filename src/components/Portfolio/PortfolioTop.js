import React from 'react';
import AboutUsTop from '../roters/AboutUsTop';
import "./PortfolioTop.css"
import { CircleIcon, MyListComponent, PortfolioBlock, VideoImage } from '../../const';
import VideoWithCover from './VideoWithCover';
import TopContent from '../roters/TopContent';

const PortfolioProject = PortfolioBlock.map((item) => (
    <div className='portfolio__top-block'>
      <div className='portfolio__top-icon'>
        <item.img /> 
      </div>
      <div className='portfolio__top-text'>
        <span className='top__text-count'>{item.count}</span>
        <span >{item.inform}</span>
      </div>
    </div>
  ));

const PortfolioTop = () => {
    const videoList = [
        { img: CircleIcon, text:'Lorem Ipsum is simply',},
        { img: CircleIcon, text:'Lorem Ipsum is simply',},
        { img: CircleIcon, text:'Lorem Ipsum is simply',},
        { img: CircleIcon, text:'Lorem Ipsum is simply',},        
    ];
    return (
        <section className='Portfolio__top'>
            <div className='container'>
                <div className='portfolio__top-wrap'>
                <AboutUsTop customStyle={{ fontSize: 16 }} />
                <TopContent />
                <div className='portfolio__top-blocks'>    
                            {PortfolioProject}           
 </div>
                </div>
                <div className='portfolio__video'>
                <VideoWithCover />
                    <div className='video__text'>
                    <h2 className='video__title'>
                    Lorem Ipsum is simply dummy text.
                    </h2>
                    <p className='video__paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .
                    </p>
                    <MyListComponent items={videoList.map((i) => ({
                            icon: i.img ,
                            text: i.text,
                        }))} />
                    </div>
                    </div>
            </div>
        </section>
    );
};

export default PortfolioTop;