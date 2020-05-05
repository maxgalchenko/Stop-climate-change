import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Donate1 from '../components/Donate1/Donate1';

const Donation = () => {
  return (
    <BrowserRouter>
      <section className='Donation'>
        <Route path='/donate' exact component={Donate1} />
      </section>
    </BrowserRouter>
  );
};

export default Donation;
