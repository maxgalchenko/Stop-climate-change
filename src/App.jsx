import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import StopClimateChange from './components/StopClimateChange/StopClimateChange';
import HungerIssue from './components/HungerIssue/HungerIssue';
import Stories from './components/Stories/Stories';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <StopClimateChange />
        <HungerIssue />
        <Stories />
      </div>
    </BrowserRouter>
  );
};

export default App;
 