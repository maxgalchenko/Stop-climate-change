import React from 'react';
import './DonateCheckout.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import DonateInput from '../DonateInput/DonateInput';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import { Link } from 'react-router-dom';

const DonateCheckout = () => {
  const dataYourInformation = [
    { labelText: 'first name', inputType: 'text', name: 'first-name' },
    { labelText: 'last name', inputType: 'text', name: 'last-name' },
    { labelText: 'street address', inputType: 'text', name: 'street-address' },
    { labelText: 'city', inputType: 'text', name: 'city' },
    { labelText: 'state', inputType: 'text', name: 'state' },
    { labelText: 'zip', inputType: 'number', name: 'zip' },
    { labelText: 'email address', inputType: 'email', name: 'email' },
  ];

  const dataPaymentInformation = [
    {
      labelText: 'credit card number',
      inputType: 'number',
      name: 'credit-card-number',
    },
    {
      labelText: 'month',
      inputType: 'month',
      name: 'month',
      placeholder: 'mm',
      maxLength: '2',
    },
    {
      labelText: 'year',
      inputType: 'year',
      name: 'year',
      placeholder: 'yyyy',
      maxLength: '4',
    },
    {
      labelText: 'cvc code',
      inputType: 'number',
      name: 'security-code',
      placeholder: 'cvc',
      maxLength: '3',
    },
  ];

  const renderYourInformation = dataYourInformation.map(
    ({ ...props }, index) => (
      <DonateInput key={index} {...props} baseClassName='yourInformation__' />
    )
  );

  const renderPaymentInformation = dataPaymentInformation.map(
    ({ ...props }, index) => (
      <DonateInput
        key={index}
        {...props}
        baseClassName='paymentInformation__'
      />
    )
  );

  return (
    <section className='DonateCheckout'>
      <PencilTitle text='Give HOPE to those Who need It most' />

      <form action=''>
        <fieldset className='yourInformation'>
          <legend>Your information</legend>
          {renderYourInformation}
        </fieldset>

        <fieldset className='paymentInformation'>
          <legend>Payment information</legend>
          {renderPaymentInformation}
        </fieldset>

        <p className='DonateCheckout__instruction'>
          Click the button to confirm your donation of $10, recurring monthly.
        </p>
        <ButtonRound text='Process Payment' to='/Stop-climate-change/donate/payment' />

        <Link className='DonateCheckout__goBack' to='/Stop-climate-change/donate'>
          Go back
        </Link>
      </form>
    </section>
  );
};

export default DonateCheckout;
