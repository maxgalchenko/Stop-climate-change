import React from 'react';
import './AboutIssue.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import StopClimateChange from '../StopClimateChange/StopClimateChange';

const AboutIssue = () => {
  return (
    <section className='AboutIssue'>
      <StopClimateChange />

      <div className='AboutIssue__card'>
        <RectangularTitle text='THE ISSUE' />
        <BigTitle text='We are an environmental organization that empowers communities, particularly women, to conserve the environment and improve livelihoods.' />
      </div>
    </section>
  );
};

export default AboutIssue;
