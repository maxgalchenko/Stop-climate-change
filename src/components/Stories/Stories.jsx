import React from 'react';
import './Stories.scss';
import Slider from 'react-slick';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import SmallText from '../../ui/SmallText/SmallText';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import { img1, img1Tablet, img1Desktop } from './images';

const Stories = () => {
  const carouselItem = (
    <div className='story'>
      <picture>
        <source media='(min-width: 1440px)' srcset={img1Desktop} />
        <source media='(min-width: 768px)' srcset={img1Tablet} />
        <img src={img1} alt='BALKI, FARMER AND MOTHER IN NIGER' />
      </picture>

      <div className='story__descr'>
        <p className='story__preview'>
          “I am a person who was helped by this organization. Before they gave
          me assistance, I was really struggling with this issue, but now my
          life is better.”
        </p>

        <SmallText text='BALKI, FARMER AND MOTHER IN NIGER' />
      </div>

      <ButtonRound fontSize='18px' marginBottom='28px' />
    </div>
  );

  return (
    <section className='Stories'>
      <RectangularTitle text='STORIES' transform='translateY(0)' />

      <Slider
        className='Stories__carousel'
        dots={true}
        infinite={true}
        slidesToShow={1}
        arrows={false}
        autoplay={true}
        autoplaySpeed={3000}
        speed={1000}
        cssEase='ease-out'
      >
        {carouselItem}
        {carouselItem}
        {carouselItem}
        {carouselItem}
      </Slider>
    </section>
  );
};

export default Stories;
