import React from 'react';
import './SliderAboutPage.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import { Carousel } from 'react-bootstrap';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import img from './images/bg.jpg';

const SliderAboutPage = () => {
  const carouselItem = (
    <Carousel.Item>
      <div className='descr__wrap'>
        <figure>
          <img src={img} alt='' />

          <figcaption>
            <BigTitle text='Training to rural women and community-based organizations ' />
            <SmallText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor.' />
          </figcaption>
        </figure>

        <ButtonRound />
      </div>
    </Carousel.Item>
  );

  return (
    <section className='SliderAboutPage'>
      <PencilTitle text='LET’S Take action now to save the future.' />
      <RectangularTitle text='2018' />
      <Carousel>
        {carouselItem}
        {carouselItem}
        {carouselItem}
        {carouselItem}
      </Carousel>
    </section>
  );
};

export default SliderAboutPage;
