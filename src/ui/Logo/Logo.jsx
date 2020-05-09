import React from 'react';
import { Link } from 'react-router-dom';
import BigTitle from '../BigTitle/BigTitle';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/Stop-climate-change/' className='Logo'>
      <BigTitle text='The Green' />
      <BigTitle text='Trees Initiative' />
    </Link>
  );
};

export default Logo;
