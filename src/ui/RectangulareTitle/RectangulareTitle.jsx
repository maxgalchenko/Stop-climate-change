import React from 'react';
import './RectangulareTitle.scss';

const RectangulareTitle = ({ text, transform, color, backgroundColor }) => {
  return (
    <h4
      className='RectangulareTitle'
      style={{ transform, color, backgroundColor }}
    >
      {text}
    </h4>
  );
};

export default RectangulareTitle;
