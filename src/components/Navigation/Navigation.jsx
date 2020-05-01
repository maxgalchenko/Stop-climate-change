import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navData = [
    { text: 'About us', to: '/aboutUs/' },
    { text: 'Our stories', to: '/ourStories/' },
    { text: 'News and events', to: '/newsAndEvents/' },
  ];

  const renderNavItems = navData.map(({ text, to }, index) => (
    <li key={index}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return (
    <nav className='Navigation'>
      <ul>{renderNavItems}</ul>
    </nav>
  );
};

export default Navigation;
