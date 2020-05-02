import React from 'react';
import './AboutIssue.scss';
import RectangulareTitle from '../../ui/RectangulareTitle/RectangulareTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import StopClimateChange from '../StopClimateChange/StopClimateChange';

const AboutIssue = () => {
  return (
    <section className='AboutIssue'>
      <StopClimateChange marginBottom='120px' />

      <div className='AboutIssue__card'>
        <RectangulareTitle text='THE ISSUE' marginBottom='36px' />
        <BigTitle
          text='We are an environmental organization that empowers communities, particularly women, to conserve the environment and improve livelihoods.'
          fontSize='22px'
          textAlign='center'
        />
      </div>
    </section>
  );
};

export default AboutIssue;
