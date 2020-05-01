import React from 'react';
import './ButtonRound.scss';
import { Link } from 'react-router-dom';

const ButtonRound = ({
  to,
  text,
  marginLeft,
  marginRight,
  marginBottom,
  width,
  height,
  fontSize,
}) => {
  return (
    <Link
      className='ButtonRound'
      to={to}
      style={{
        marginLeft: marginLeft || 'auto',
        marginRight: marginRight || 'auto',
        marginBottom,
        width,
        height,
        fontSize,
      }}
    >
      {text}
    </Link>
  );
};

export default ButtonRound;
