import React from 'react';
import './LetsTake.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import LetsTakeArticle from './LetsTakeArticle/LetsTakeArticle';
import { img1, img2, img1Desktop, img2Desktop } from './images';

const LetsTake = () => {
  const letsTakeArticleData = [
    {
      rectangularText: 'EVENT',
      src: img1,
      srcDesktop: img1Desktop,
      bigTitleText: 'Earth Day 2018 community tree planting event',
      smallText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh. Curabitur in tortor lorem.',
    },
    {
      rectangularText: 'LATEST NEWS',
      src: img2,
      srcDesktop: img2Desktop,
      bigTitleText: 'Earth Day 2018 community tree planting event',
      smallText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh. Curabitur in tortor lorem.',
    },
  ];

  const letsTakeArticleRender = letsTakeArticleData.map(
    ({ ...props }, index) => <LetsTakeArticle {...props} key={index} />
  );

  return (
    <section className='LetsTake'>
      <PencilTitle text='LET’S Take action now to save the future.' />

      {letsTakeArticleRender}
    </section>
  );
};

export default LetsTake;
