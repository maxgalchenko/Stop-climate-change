import React from 'react';
import './Stories.scss';
import { Carousel } from 'react-bootstrap';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import SmallText from '../../ui/SmallText/SmallText';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import img1 from './images/img1.jpg';

const Stories = () => {
  const carouselItem = (
    <Carousel.Item className='story'>
      <img src={img1} alt='BALKI, FARMER AND MOTHER IN NIGER' />
      <div className='story__descr'>
        <p className='story__preview'>
          “I am a person who was helped by this organization. Before they gave
          me assistance, I was really struggling with this issue, but now my
          life is better.”
        </p>

        <SmallText
          text='BALKI, FARMER AND MOTHER IN NIGER'
          fontSize='11px'
          color='white'
        />
      </div>

      <ButtonRound text='Read more' fontSize='18px' marginBottom='28px' />
    </Carousel.Item>
  );

  return (
    <section className='Stories'>
      <RectangularTitle text='STORIES' transform='translateY(0)' />

      <Carousel className='Stories__carousel' controls={false}>
        {carouselItem}
        {carouselItem}
        {carouselItem}
        {carouselItem}
      </Carousel>
    </section>
  );
};

export default Stories;
