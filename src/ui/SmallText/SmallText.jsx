import React from 'react';
import './SmallText.scss';

const SmallText = ({ text, marginBottom, color }) => {
  return (
    <div className='SmallText' style={{ marginBottom, color }}>
      {text}
    </div>
  );
};

export default SmallText;
