import React from 'react';
import { Link } from 'react-router-dom';
import BigTitle from '../../ui/BigTitle/BigTitle';

const Logo = () => {
  return (
    <Link to='/' className='Logo'>
      <BigTitle text='The Green' fontSize='18px' />
      <BigTitle text='Trees Initiative' fontSize='18px' />
    </Link>
  );
};

export default Logo;
