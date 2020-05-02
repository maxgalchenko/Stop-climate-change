import React from 'react';
import './PencilTitle.scss';

const PencilTitle = ({ text, marginBottom, paddingTop, color, width }) => {
  return (
    <h2
      className='PencilTitle'
      style={{ marginBottom, paddingTop, color, width }}
    >
      {text}
    </h2>
  );
};

export default PencilTitle;
