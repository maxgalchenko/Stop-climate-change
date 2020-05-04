import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutUs' component={About} />
        </Switch> */}
        <News />
        <Subscribe />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
