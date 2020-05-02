import React from 'react';
import './RectangulareTitle.scss';

const RectangulareTitle = ({
  text,
  transform,
  color,
  backgroundColor,
  marginBottom,
}) => {
  return (
    <h4
      className='RectangulareTitle'
      style={{ transform, color, backgroundColor, marginBottom }}
    >
      {text}
    </h4>
  );
};

export default RectangulareTitle;
