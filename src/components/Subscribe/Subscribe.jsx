import React from 'react';
import './Subscribe.scss';
import BigTitle from '../../ui/BigTitle/BigTitle';
import { Row } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <section className='Subscribe'>
      <BigTitle
        text='Subscribe to our monthly newsletter and stay up to date with all news and events.'
        fontSize='22px'
        marginBottom='32px'
      />
      <Row className='justify-content-between'>
        <input
          type='email'
          name=''
          id=''
          placeholder='Enter your email address'
        />
        <button type='submit'>Subscribe</button>
      </Row>
    </section>
  );
};

export default Subscribe;
