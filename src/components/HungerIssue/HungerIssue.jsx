import React from 'react';
import './HungerIssue.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import RectangulareTitle from '../../ui/RectangulareTitle/RectangulareTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';

const HungerIssue = () => {
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
      <div className='row'>
        <BigTitle text={title} fontSize='22px' />
        <div className='didYouKnow__socialIcon socialIcon--twitter'></div>
      </div>

      <div className='row'>
        <SmallText text={text} />
        <div className='didYouKnow__socialIcon socialIcon--facebook'></div>
      </div>
    </li>
  ));

  return (
    <section className='HungerIssue'>
      <PencilTitle
        text='Climate change Is a hunger issue.'
        marginBottom='18px'
      />
      <ButtonRound
        text='Take action today'
        fontSize='16px'
        width='152px'
        height='40px'
        marginLeft='0'
        marginRight='auto'
        marginBottom='38px'
      />

      <section className='didYouKnow'>
        <RectangulareTitle text='DID YOU KNOW?' transform='translateY( 50% )' />
        <ul className='didYouKnow__list '>{renderDidYouKnowList}</ul>
      </section>
    </section>
  );
};

export default HungerIssue;
