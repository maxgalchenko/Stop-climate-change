import React from 'react';
import './Header.scss';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import BigTitle from '../../ui/BigTitle/BigTitle';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <div className='titleNavWrap'>
        <Link to='/' className='logoWrap'>
          <BigTitle text='The Green' />
          <BigTitle text='Trees Initiative' />
        </Link>
        <Navigation />
      </div>

      <ButtonRound
        text='Donate today'
        to='/donate'
        height='40px'
      />
    </header>
  );
};

export default Header;
