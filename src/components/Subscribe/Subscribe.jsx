import React from 'react';
import './Subscribe.scss';
import BigTitle from '../../ui/BigTitle/BigTitle';
import { Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

const Subscribe = () => {
  const subscribe = (
    <section className='Subscribe'>
      <BigTitle text='Subscribe to our monthly newsletter and stay up to date with all news and events.' />
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
  return (
    <Switch>
      <Route path='/donate'>{null}</Route>
      <Route path='/'>{subscribe}</Route>
    </Switch>
  );
};

export default Subscribe;
