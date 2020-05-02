import React from 'react';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';

const StopClimateChange = ({ color, marginBottom }) => {
  const pencilTitleData = ['#stop', 'climate', 'change'];

  const renderPencilTitle = pencilTitleData.map((item, index) => (
    <PencilTitle key={index} text={item} color={color} />
  ));

  return (
    <div className='StopClimateChange' style={{ marginBottom }}>
      {renderPencilTitle}
    </div>
  );
};

export default StopClimateChange;
