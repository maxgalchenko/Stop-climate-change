import React from 'react';
import './Header.scss';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className='Header'>
      <div className='titleNavWrap'>
        <Logo />
        <Navigation />
      </div>

      <ButtonRound text='Donate today' to='/donate' height='40px' />
    </header>
  );
};

export default Header;
