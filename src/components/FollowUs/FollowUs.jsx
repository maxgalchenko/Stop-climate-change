import React from 'react';
import './FollowUs.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import BigTitle from '../../ui/BigTitle/BigTitle';
import SmallText from '../../ui/SmallText/SmallText';
import {
  instagram,
  twitter,
  youtube,
  postImg,
  postImgDesktop,
  facebook,
  rss,
} from './images';

const FollowUs = () => {
  const dataSocialsList = [
    { icon: instagram, altText: 'instagram', href: 'https://instagram.com' },
    { icon: twitter, altText: 'twitter', href: 'https://twitter.com' },
    { icon: youtube, altText: 'youtube', href: 'https://youtube.com' },
    { icon: facebook, altText: 'facebook', href: 'https://facebook.com' },
    { icon: rss, altText: 'rss', href: 'https://rss.com' },
  ];

  const renderSocialsList = dataSocialsList.map(
    ({ icon, href, alt }, index) => (
      <li key={index}>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <img src={icon} alt={alt} />
        </a>
      </li>
    )
  );

  return (
    <section className='FollowUs'>
      <div className='FollowUs__wrap'>
        <h2 className='FollowUs__title'>Follow us</h2>
        <ul className='FollowUs__socials'>{renderSocialsList}</ul>
      </div>

      <PencilTitle text='LATEST POST' />

      <article className='FollowUs__post'>
        <div className='greenCard'>
          <BigTitle text='This is the title for the latest blog post this long' />
          <SmallText text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus. Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu erat sed ipsum. Lorem ipsum.' />
          <a href='/'>Continue reading this post</a>
        </div>

        <picture>
          <source media='(min-width: 1440px)' srcset={postImgDesktop} />
          <img src={postImg} alt='' />
        </picture>
      </article>
    </section>
  );
};

export default FollowUs;
