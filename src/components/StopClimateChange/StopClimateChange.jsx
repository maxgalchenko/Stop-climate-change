import React from 'react';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';

const StopClimateChange = () => {
  const pencilTitleData = ['#stop', 'climate', 'change'];

  const renderPencilTitle = pencilTitleData.map((item, index) => (
    <PencilTitle key={index} text={item} />
  ));

  return (
    <div className='StopClimateChange'>
      {renderPencilTitle}
    </div>
  );
};

export default StopClimateChange;
