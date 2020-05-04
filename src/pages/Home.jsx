import React from 'react';
import DidYouKnow from '../components/DidYouKnow/DidYouKnow';
import Stories from '../components/Stories/Stories';
import LetsTake from '../components/LetsTake/LetsTake';
import HomeIssue from '../components/HomeIssue/HomeIssue';

const Home = () => {
  return (
    <main className='Home'>
      <h1 className='visually-hidden '>The Green Trees Initiative</h1>
      <HomeIssue />
      <DidYouKnow />
      <Stories />
      <LetsTake />
    </main>
  );
};

export default Home;
