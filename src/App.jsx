import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Home, About, News, Stories } from './pages';
import Subscribe from './components/Subscribe/Subscribe';
import Donation from './pages/Donation';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Switch>
          <Route path='/aboutUs' component={About} />
          <Route path='/news' component={News} />
          <Route path='/ourStories' component={Stories} />
          <Route path='/donate' component={Donation} />
          <Route path='/' component={Home} />
        </Switch>

        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
