import React from 'react';
import './OurTeam.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';
import { img1, img2, img3, img4, img5, img6 } from './images/';

const OurTeam = () => {
  const dataOurTeamList = [img1, img2, img3, img4, img5, img6];

  const rednerOurTeamList = dataOurTeamList.map((item, index) => (
    <li className='OurTeam__item' key={index}>
      <figure>
        <img src={item} alt='' />
        <figcaption>Person Name, Title Goes Here</figcaption>
      </figure>
    </li>
  ));

  return (
    <section className='OurTeam'>
      <RectangularTitle text='OUR TEAM' />
      <BigTitle text='Meet the team of people making it happen.' />
      <SmallText text='Our leaders set our global direction, goals and strategies, and support nearly 500 team members working in more than 20 countries around the world.' />

      <ul className='OurTeam__list'>{rednerOurTeamList}</ul>
    </section>
  );
};

export default OurTeam;
