import React from 'react';
import './HomeIssue.scss';
import RectangulareTitle from '../../ui/RectangulareTitle/RectangulareTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import { Link } from 'react-router-dom';
import SmallText from '../../ui/SmallText/SmallText';
import { postImg1, postImg2, postImg3 } from './images/index';
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
      title: 'Tree Planting Initiatives',
    },
    {
      src: postImg2,
      title: 'Education and Training',
    },
    { src: postImg3, title: 'Advocacy and Campaigning', descr: '' },
  ];

  const renderTakeActionList = takeActionData.map(({ title, descr }, index) => (
    <li className='takeAction__item' key={index}>
      <BigTitle text={title} marginBottom='10px' />
      <SmallText text={descr} />
    </li>
  ));

  const renderWhatWeDoList = whatWeDoData.map(({ src, title }, index) => (
    <li className='whatWeDo__item'>
      <img className='whatWeDo__img' src={src} alt='' />
      <BigTitle text={title} marginBottom='22px' />
      <SmallText
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.'
        marginBottom='31px'
      />
      <ButtonRound
        text='Read more'
        fontSize='16px'
        width='152px'
        height='40px'
      />
    </li>
  ));

  return (
    <section className='HomeIssue'>
      <section className='issueBlock'>
        <StopClimateChange marginBottom='136px' />

        <div className='HomeIssue__card'>
          <RectangulareTitle text='THE ISSUE' marginBottom='36px' />
          <BigTitle
            text='Climate change poses the biggest threat to women in developing nations.'
            fontSize='22px'
            textAlign='center'
            marginBottom='33px'
          />

          <Link to='/readMore' className='readMore'>
            Read more about this environmental and social cause
          </Link>
        </div>
      </section>

      <section className='takeAction'>
        <RectangulareTitle text='TAKE ACTION' marginBottom='47px' />
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
