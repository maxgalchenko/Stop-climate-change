import React from 'react';
import AboutIssue from '../components/AboutIssue/AboutIssue';
import MissionValues from '../components/MissionValues/MissionValues';
import OurTeam from '../components/OurTeam/OurTeam';
import OurImpact from '../components/OurImpact/OurImpact';
import SliderAboutPage from '../components/SliderAboutPage/SliderAboutPage';

const About = () => {
  return (
    <main className='About'>
      <h1 className='visually-hidden '>About The Green Trees Initiative</h1>
      <AboutIssue />
      <MissionValues />
      <OurTeam />
      <OurImpact />
      <SliderAboutPage />
    </main>
  );
};

export default About;
