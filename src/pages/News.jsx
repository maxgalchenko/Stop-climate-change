import React from 'react';
import FollowUs from '../components/FollowUs/FollowUs';
import AllEntries from '../components/AllEntries/AllEntries';

const News = () => {
  return (
    <main className='News'>
      <h1 className='visually-hidden '>The Green Trees Initiative - News</h1>
      <FollowUs />
      <AllEntries />
    </main>
  );
};

export default News;
