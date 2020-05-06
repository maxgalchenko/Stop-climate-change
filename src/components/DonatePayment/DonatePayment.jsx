import React from 'react';
import './DonatePayment.scss';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import { textIcon, emailIcon, twitterIcon, facebookIcon } from './images/';

const DonatePayment = () => {
  const dataSocials = [
    { icon: twitterIcon, href: 'twitter.com', text: 'twitter' },
    { icon: facebookIcon, href: 'facebook.com', text: 'facebook' },
    { icon: emailIcon, href: 'gmail.com', text: 'email' },
    { icon: textIcon, href: 'message.com', text: 'text' },
  ];

  const renderSocials = dataSocials.map(({ icon, href, text }, index) => (
    <li key={index}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <img src={icon} alt='' />
        {text}
      </a>
    </li>
  ));

  return (
    <section className='DonatePayment'>
      <div className='DonatePayment__wrap'>
        <p className='DonatePayment__thanks'>
          Thank you. Your donation helps support families in need and fights
          climate change.
        </p>
        <RectangularTitle text='SHARE' />
        <div className='DonatePayment__card'>
          <p>
            “I just donated to The Green Trees Initiative to help support
            families and fight climate change. Won’t you join me?
          </p>

          <ul className='DonatePayment__socials'>{renderSocials}</ul>
        </div>
      </div>

      <p className='DonatePayment__thanks2'>
        Thank you so much for giving. We’ve sent a receipt for your donation to{' '}
        <a href='mailto:yourmail@emailaddress.com'>yourmail@emailaddress.com</a>
        . If you have any questions, please don’t hesitate to reach out to{' '}
        <a href='mailto:support@emailaddress.com'>support@emailaddress.com</a>.
      </p>

      <PencilTitle text='We can Take action now to save the future.' />
    </section>
  );
};

export default DonatePayment;
