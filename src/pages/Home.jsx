import React from 'react';
import StopClimateChange from '../components/StopClimateChange/StopClimateChange';
import HungerIssue from '../components/HungerIssue/HungerIssue';
import Stories from '../components/Stories/Stories';
import LetsTake from '../components/LetsTake/LetsTake';
import Subscribe from '../components/Subscribe/Subscribe';

const Home = () => {
  return (
    <div className='Home'>
      <h1 className='visually-hidden'>Stop climate change - home page</h1>
      <StopClimateChange />
      <HungerIssue />
      <Stories />
      <LetsTake />
      <Subscribe />
    </div>
  );
};

export default Home;
