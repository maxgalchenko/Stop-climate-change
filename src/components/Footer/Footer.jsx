import React from 'react';
import './Footer.scss';
import { Row, Container } from 'react-bootstrap';
import SmallText from '../../ui/SmallText/SmallText';
import Logo from '../Logo/Logo';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';

const Footer = () => {
  const followUsData = [
    { title: 'Facebook', href: 'Facebook.com' },
    { title: 'Twitter.com', href: 'Twitter' },
    { title: 'Instagram', href: 'Instagram.com' },
    { title: 'Medium', href: 'Medium.com' },
  ];

  const learnMoreData = [
    { title: 'The issue', href: 'Facebook.com' },
    { title: 'How we help', href: 'Twitter' },
    { title: 'Get involved', href: 'Instagram.com' },
    { title: 'Latest news', href: 'Medium.com' },
  ];

  const pencilTitleData = ['#stop', 'climate', 'change'];

  const renderFolowUsList = followUsData.map(({ title, href }, index) => (
    <li key={index}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    </li>
  ));

  const renderLearnMoreList = learnMoreData.map(({ title, href }, index) => (
    <li key={index}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {title}
      </a>
    </li>
  ));

  const renderPencilTitle = pencilTitleData.map((item, index) => (
    <PencilTitle key={index} text={item} fontSzie='44px' color='#354463' />
  ));

  return (
    <footer className='Footer'>
      <Container>
        <Row className='justify-content-between flex-nowrap row1'>
          <Logo />
          <section className='contactUs'>
            <SmallText text='CONTACT US' marginBottom='11px' />
            <p className='contacts'>
              123 Anywhere St. Cityname, NY 11206
              <a className='tel' href='tel:1234567890'>
                1-562-867-5309
              </a>
              <a
                className='link'
                href='https://www.savetheearth.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                savetheearth.org
              </a>
            </p>
          </section>
        </Row>

        <Row className='justify-content-between flex-nowrap row2'>
          <ul>
            <SmallText text='FOLLOW US' marginBottom='11px' />
            {renderFolowUsList}
          </ul>

          <ul>
            <SmallText text='LEARN MORE' marginBottom='11px' />
            {renderLearnMoreList}
          </ul>
        </Row>

        <div className='pencilTitleWrap'>{renderPencilTitle}</div>
      </Container>
    </footer>
  );
};

export default Footer;
