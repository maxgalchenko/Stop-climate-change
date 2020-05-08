import React from 'react';
import './HomeIssue.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import { Link } from 'react-router-dom';
import SmallText from '../../ui/SmallText/SmallText';
import {
  postImg1,
  postImg2,
  postImg3,
  postImg1Tablet,
  postImg2Tablet,
  postImg3Tablet,
} from './images/index';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import StopClimateChange from '../StopClimateChange/StopClimateChange';

const HomeIssue = () => {
  const takeActionData = [
    {
      title: 'Learn',
      descr: 'Get the facts about this issue and how we’re helping.',
    },
    {
      title: 'Volunteer',
      descr: 'Find out about upcoming events that need your help.',
    },
    {
      title: 'Share',
      descr: 'Let your social media networks know about this important cause.',
    },
    {
      title: 'Donate',
      descr: 'Help us raise money to make a big difference with this issue.',
    },
  ];

  const whatWeDoData = [
    {
      src: postImg1,
      srcTablet: postImg1Tablet,
      title: 'Tree Planting Initiatives',
    },
    {
      src: postImg2,
      srcTablet: postImg2Tablet,
      title: 'Education and Training',
    },
    {
      src: postImg3,
      srcTablet: postImg3Tablet,
      title: 'Advocacy and Campaigning',
      descr: '',
    },
  ];

  console.log(window.innerWidth);

  const renderTakeActionList = takeActionData.map(({ title, descr }, index) => (
    <li className='takeAction__item' key={index}>
      <BigTitle text={title} />
      <SmallText text={descr} />
    </li>
  ));

  const renderWhatWeDoList = whatWeDoData.map(
    ({ src, title, srcTablet }, index) => (
      <li className='whatWeDo__item' key={index}>
        <picture>
          <source media='(min-width: 768px)' srcset={srcTablet} />
          <img className='whatWeDo__img' src={src} alt='' />
        </picture>

        <BigTitle text={title} />
        <SmallText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.' />
        <ButtonRound text='Read more' />
      </li>
    )
  );

  return (
    <section className='HomeIssue'>
      <section className='issueBlock'>
        <StopClimateChange />

        <div className='HomeIssue__card'>
          <RectangularTitle text='THE ISSUE' />
          <BigTitle text='Climate change poses the biggest threat to women in developing nations.' />

          <Link to='/readMore' className='readMore'>
            Read more about this environmental and social cause
          </Link>
        </div>
      </section>

      <section className='takeAction'>
        <RectangularTitle text='TAKE ACTION' />
        <ul>{renderTakeActionList}</ul>
      </section>

      <section className='whatWeDo'>
        <h3 className='whatWeDo__title'>WHAT WE DO</h3>
        <p className='whatWeDo__mission'>
          Our mission is to create sustainable work for women in developing
          nations while helping to slow climate change.
        </p>

        <ul className='whatWeDo__list'>{renderWhatWeDoList}</ul>
      </section>
    </section>
  );
};

export default HomeIssue;
