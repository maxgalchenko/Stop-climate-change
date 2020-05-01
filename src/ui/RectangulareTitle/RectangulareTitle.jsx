import React from 'react';
import './RectangulareTitle.scss';

const RectangulareTitle = ({ text, transform }) => {
  return (
    <h4 className='RectangulareTitle' style={{ transform }}>
      {text}
    </h4>
  );
};

export default RectangulareTitle;
