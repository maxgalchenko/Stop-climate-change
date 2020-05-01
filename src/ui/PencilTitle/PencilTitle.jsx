import React from 'react';
import './PencilTitle.scss';

const PencilTitle = ({ text, marginBottom, paddingTop }) => {
  return (
    <h2 className='PencilTitle' style={{ marginBottom, paddingTop }}>
      {text}
    </h2>
  );
};

export default PencilTitle;
