import React from 'react';
import { MyComponentBlocks, PortfolioPhoto1, PortfolioPhoto2, PortfolioPhoto3 } from '../../const';
import './PortfolioBlock.css'
const PortfolioBlock = () => {
    const PortfolioCardText = [
        {
          text: "Lorem Ipsum is simply dummy text dummy text",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          it: "Read more",
          img: PortfolioPhoto1,   
        },
        {
          text: "Lorem Ipsum is simply dummy text dummy text",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          it: "Read more",
          img: PortfolioPhoto2,   
        },
        {
          text: "Lorem Ipsum is simply dummy text dummy text",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          it: "Read more",
          img: PortfolioPhoto3,   
        },
    ] 
    return (
        <section className='portfolio__middle'>
            <div className='container'>
            <div className='middle'>
                <MyComponentBlocks items={PortfolioCardText} className="middle__wrap" item="middle-content" />
                </div> 
            </div>
        </section>
    );
};

export default PortfolioBlock;