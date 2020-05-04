import React from 'react';
import './OurImpact.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';

const OurImpact = () => {
  const dataOurImpactList = [
    { title: '50', descr: 'million trees planted in deforested areas' },
    { title: '20', descr: 'women employed in communities' },
    { title: '25', descr: 'million trees planted in deforested areas' },
    { title: '15', descr: 'women employed in communities' },
  ];

  const renderOurImpactList = dataOurImpactList.map(
    ({ title, descr }, index) => (
      <li className='OurImpact__item' key={index}>
        <dl>
          <dt>
            <PencilTitle text={title} />
          </dt>
          <dd>{descr}</dd>
        </dl>
      </li>
    )
  );

  return (
    <section className='OurImpact'>
      <RectangularTitle text='OUR IMPACT' />
      <p className='OurImpact__title'>
        We invest in a better tomorrow for the planet and all its people.
      </p>
      <ul className='OurImpact__list'>{renderOurImpactList}</ul>
    </section>
  );
};

export default OurImpact;
