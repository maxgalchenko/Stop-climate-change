import React from 'react';
import './MissionValues.scss';
import RectangulareTitle from '../../ui/RectangulareTitle/RectangulareTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';

const MissionValues = () => {
  const dataMissionValuesList = [
    {
      title: 'Stay open-minded',
      descr:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus.',
    },
    {
      title: 'Protect the Earth',
      descr:
        'Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu erat sed ipsum eleifend.',
    },
    {
      title: 'Work from love',
      descr:
        'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
    },
    {
      title: 'Plant new seeds',
      descr:
        'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
    },
    {
      title: 'Lend a hand',
      descr:
        'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
    },
    {
      title: 'Plant new seeds',
      descr: 'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
    },
    {
      title: 'Lend a hand',
      descr:
        'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
    },
    {
      title: 'Plant new seeds',
      descr:
        'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
    },
  ];

  const renderMissionValuesList = dataMissionValuesList.map(
    ({ title, descr }, index) => (
      <li
        className={`MissionValues__item MissionValues__item${index + 1}`}
        key={index}
      >
        <b>{title}</b>
        <SmallText text={descr} color='white'/>
      </li>
    )
  );

  return (
    <section className='MissionValues'>
      <RectangulareTitle text='MISSION & VALUES' />

      <BigTitle text='We strive for better environmental management, community empowerment, and livelihood improvement using tree-planting as an entry point.' />
      <ul className='MissionValues__list'>{renderMissionValuesList}</ul>
    </section>
  );
};

export default MissionValues;
