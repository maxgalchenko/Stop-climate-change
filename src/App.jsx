import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Home, About, News, Stories } from './pages';
import Subscribe from './components/Subscribe/Subscribe';
import Donation from './pages/Donation';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutUs' component={About} />
          <Route path='/news' component={News} />
          <Route path='/ourStories' component={Stories} />
          <Route path='/donate' component={Donation} />
        </Switch>

        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
