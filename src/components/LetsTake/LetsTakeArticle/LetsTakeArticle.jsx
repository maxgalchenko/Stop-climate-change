import React from 'react';
import './LetsTakeArticle.scss';
import RectangulareTitle from '../../../ui/RectangulareTitle/RectangulareTitle';
import BigTitle from '../../../ui/BigTitle/BigTitle';
import SmallText from '../../../ui/SmallText/SmallText';
import ButtonRound from '../../../ui/ButtonRound/ButtonRound';

const LetsTakeArticle = ({ rectangularText, src, bigTitleText, smallText }) => {
  return (
    <article className='LetsTakeArticle'>
      <RectangulareTitle
        text={rectangularText}
        transform='translateY(0)'
        color='#354463'
        backgroundColor='white'
      />
      <div className='article__wrap'>
        <img src={src} alt='' />
        <BigTitle
          text={bigTitleText}
          marginBottom='40px'
          color='white'
          fontSize='22px'
        />
        <SmallText text={smallText} marginBottom='31px' color='white' />
        <ButtonRound text='Read more' />
      </div>
    </article>
  );
};

export default LetsTakeArticle;
