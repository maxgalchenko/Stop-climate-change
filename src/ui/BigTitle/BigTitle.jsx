import React from 'react';
import './BigTitle.scss';

const BigTitle = ({ text, fontSize, color, marginBottom, textAlign }) => {
  return (
    <h3
      className='BigTitle'
      style={{ fontSize, color, marginBottom, textAlign }}
    >
      {text}
    </h3>
  );
};

export default BigTitle;
