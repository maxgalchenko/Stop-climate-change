import React from 'react';
import './DidYouKnow.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';

const DidYouKnow = () => {
  const didYouKnowData = [
    {
      title: '3 out of 4',
      text: 'People living in poverty depend on agriculture for survival.',
    },
    {
      title: '100 million +',
      text: 'People living in poverty due to climate change by 2030',
    },
    {
      title: '30%',
      text: 'How high crop yield losses could go by the year 2080',
    },
    {
      title: '200 million +',
      text: 'Refugees dealing with food shortages by the year 2050',
    },
  ];

  const renderDidYouKnowList = didYouKnowData.map(({ title, text }, index) => (
    <li className='didYouKnow__item' key={index}>
      <div className='didYouKnow__row'>
        <BigTitle text={title} />
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='didYouKnow__socialIcon socialIcon--twitter'
        >
          twitter link
        </a>
      </div>

      <div className='didYouKnow__row'>
        <SmallText text={text} />
        <a
          href='https://tfacebook.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='didYouKnow__socialIcon socialIcon--facebook'
        >
          facebook link
        </a>
      </div>
    </li>
  ));

  return (
    <section className='DidYouKnow'>
      <PencilTitle text='Climate change Is a hunger issue.' />
      <ButtonRound text='Take action today' />

      <section className='didYouKnow'>
        <RectangularTitle text='DID YOU KNOW?' />
        <ul className='didYouKnow__list '>{renderDidYouKnowList}</ul>
      </section>
    </section>
  );
};

export default DidYouKnow;
