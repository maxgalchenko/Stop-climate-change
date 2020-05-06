import React from 'react';
import './Header.scss';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import Navigation from '../Navigation/Navigation';
import Logo from '../../ui/Logo/Logo';
import { Switch, Route } from 'react-router-dom';

const Header = () => {
  const usualHeader = (
    <header className='Header'>
      <div className='titleNavWrap'>
        <Logo />
        <Navigation />
      </div>

      <ButtonRound text='Donate today' to='/donate' exact />
    </header>
  );

  const donatePageHeader = (
    <header className='Header--donate'>
      <Logo />
    </header>
  );

  return (
    <Switch>
      <Route path='/donate' exact>
        {donatePageHeader}
      </Route>
      <Route path='/donate-checkout' exact>
        {donatePageHeader}
      </Route>
      <Route path='/'>{usualHeader}</Route>
    </Switch>
  );
};

export default Header;
