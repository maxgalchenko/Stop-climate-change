import React from 'react';
import './LetsTakeArticle.scss';
import RectangularTitle from '../../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../../ui/BigTitle/BigTitle';
import SmallText from '../../../ui/SmallText/SmallText';
import ButtonRound from '../../../ui/ButtonRound/ButtonRound';

const LetsTakeArticle = ({ rectangularText, src, bigTitleText, smallText }) => {
  return (
    <article className='LetsTakeArticle'>
      <RectangularTitle
        text={rectangularText}

      />
      <div className='article__wrap'>
        <img src={src} alt='' />
        <div className='content-wrap'>
          <BigTitle
            text={bigTitleText}
         
          />
          <SmallText text={smallText} />
          <ButtonRound text='Read more' />
        </div>
      </div>
    </article>
  );
};

export default LetsTakeArticle;
