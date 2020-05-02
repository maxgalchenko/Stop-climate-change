import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
