import React from 'react';
import './RectangularTitle.scss';

const RectangularTitle = ({
  text,
  transform,
  color,
  backgroundColor,
  marginBottom,
}) => {
  return (
    <h4
      className='RectangularTitle'
      style={{ transform, color, backgroundColor, marginBottom }}
    >
      {text}
    </h4>
  );
};

export default RectangularTitle;
