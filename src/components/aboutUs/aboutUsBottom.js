import React from 'react';
import { teamAvatars } from '../../const';
import StayInLoop from '../StayInLoop';
import './aboutUsBottom.css';
const TeamMemberCard = ({ img, name, position }) => (
  <>
    <img className='bottom__card-img' src={img} alt='' />
    <span className='bottom__card-name'>{name}</span>
    <div className='bottom__card-position'>{position}</div>
  </>
);

const AboutUsBottom = () => {
  const teamMemberCards = teamAvatars.map((item) => (
    <div key={item.name} className='about__bottom-card'>
      <TeamMemberCard {...item} />
    </div>
  ));

  return (
    <section className='about__bottom'>
      <div className='container'>
        <div className='about__bottom-wrap'>
          <h3 className='about__bottom-title'>
            Our Team
          </h3>
          <div className='about__bottom-cards'>
            {teamMemberCards}
          </div>
        </div>
        <StayInLoop />
      </div>
      
    </section>
  );
};

export default AboutUsBottom;