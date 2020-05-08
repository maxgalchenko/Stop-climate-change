import React from 'react';
import './OurTeam.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';
import { img1, img2, img3, img4, img5, img6 } from './images/';
import {
  img1Tablet,
  img2Tablet,
  img3Tablet,
  img4Tablet,
  img5Tablet,
  img6Tablet,
} from './images/tablet/';

const OurTeam = () => {
  const dataOurTeamList = [
    { imgMobile: img1, imgTablet: img1Tablet },
    { imgMobile: img2, imgTablet: img2Tablet },
    { imgMobile: img3, imgTablet: img3Tablet },
    { imgMobile: img4, imgTablet: img4Tablet },
    { imgMobile: img5, imgTablet: img5Tablet },
    { imgMobile: img6, imgTablet: img6Tablet },
  ];

  const rednerOurTeamList = dataOurTeamList.map(
    ({ imgMobile, imgTablet }, index) => (
      <li className='OurTeam__item' key={index}>
        <figure>
          <picture>
            <source media='(min-width: 768px)' srcset={imgTablet} />
            <img src={imgMobile} alt='' />
          </picture>
          <figcaption>Person Name, Title Goes Here</figcaption>
        </figure>
      </li>
    )
  );

  return (
    <section className='OurTeam'>
      <RectangularTitle text='OUR TEAM' />
      <div className='textWrap'>
        <BigTitle text='Meet the team of people making it happen.' />
        <SmallText text='Our leaders set our global direction, goals and strategies, and support nearly 500 team members working in more than 20 countries around the world.' />
      </div>

      <ul className='OurTeam__list'>{rednerOurTeamList}</ul>
    </section>
  );
};

export default OurTeam;
