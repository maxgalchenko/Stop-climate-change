import React from 'react';
import './SliderAboutPage.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import img from './images/bg.jpg';
import Slider from 'react-slick';

const SliderAboutPage = () => {
  const carouselItem = (
    <div className='descr__wrap'>
      <RectangularTitle text='2020' />
      <figure>
        <img src={img} alt='' />

        <figcaption>
          <BigTitle text='Training to rural women and community-based organizations ' />
          <SmallText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor.' />
          <ButtonRound />
        </figcaption>
      </figure>
    </div>
  );

  return (
    <section className='SliderAboutPage'>
      <PencilTitle text='LET’S Take action now to save the future.' />
      <Slider
        infinite={true}
        className='Slider'
        cssEase='linear'
        slidesToScroll={1}
        slidesToShow={1}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots: true,
            },
          },
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              dots: false,
            },
          },
        ]}
      >
        {carouselItem}
        {carouselItem}
        {carouselItem}
        {carouselItem}
      </Slider>
    </section>
  );
};

export default SliderAboutPage;
