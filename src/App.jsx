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
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route path='/Stop-climate-change/aboutUs' component={About} />
          <Route path='/Stop-climate-change/news' component={News} />
          <Route path='/Stop-climate-change/ourStories' component={Stories} />
          <Route path='/Stop-climate-change/donate' component={Donation} />
          <Route path='/Stop-climate-change/' component={Home} />
        </Switch>

        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
