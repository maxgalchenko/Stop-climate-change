import React, { useState } from 'react';
import './AllEntries.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import RectangularTitle from '../../ui/RectangularTitle/RectangularTitle';
import postHalf from './images/postHalf.jpg';
import postFull from './images/postFull.jpg';

const AllEntries = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const dataFilters = [
    { title: 'All', className: 'activeFilter' },
    { title: 'Events' },
    { title: 'News' },
  ];
  const renderFilters = dataFilters.map(({ title, className }, index) => (
    <li key={index}>
      <button className={className} onClick={(e) => onFilterClick(e)}>
        {title}
      </button>
    </li>
  ));

  const dataPostsList = [
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
    {
      text: 'Tree planting initiative in Green Fields Park',
      linkText: 'Find out more about this event',
      img: postFull,
      category: 'events',
    },
    {
      text: 'Tree planting initiative in Green Fields Park',
      linkText: 'Find out more about this event',
      img: postFull,
      category: 'events',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
    {
      text: 'Tree planting initiative in Green Fields Park',
      linkText: 'Find out more about this event',
      img: postFull,
      category: 'events',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit.',
      linkText: 'Read this post',
      img: postHalf,
      category: 'news',
    },
  ];

  const filterPostsList = (neededCategory) =>
    dataPostsList.filter(({ category }) =>
      neededCategory ? category === neededCategory : category
    );

  const renderPostsList = (data) =>
    data.map(({ text, linkText, img, category }, index) => (
      <li key={index} className={category}>
        <figure>
          <img src={img} alt="" />

          <figcaption>
            <RectangularTitle text={category} />
            {text}
          </figcaption>
        </figure>
        <button
          type="button"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: 'inherit',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          aria-label={linkText}
          onClick={() => {
            /* TODO: Add navigation or modal logic here */
          }}
        >
          {linkText}
        </button>
      </li>
    ));

  const renderPostsNewsList = renderPostsList(filterPostsList('news'));
  const renderPostsEventsList = renderPostsList(filterPostsList('events'));
  const renderFullPostsList = renderPostsList(filterPostsList(''));

  const renderPosts =
    activeFilter === 'all'
      ? renderFullPostsList
      : activeFilter === 'news'
      ? renderPostsNewsList
      : renderPostsEventsList;

  const onFilterClick = (e) => {
    const previousActiveFilter = document
      .querySelector('.AllEntries')
      .querySelector('.activeFilter');
    previousActiveFilter.className = '';
    e.target.className = 'activeFilter';
    const activeFilter = e.target.innerHTML.toLowerCase();
    setActiveFilter(activeFilter);
  };

  return (
    <section className="AllEntries">
      <div className="titleFilters__wrap">
        <PencilTitle text="ALL ENTRIES" />
        <ul className="AllEntries__filters">{renderFilters}</ul>
      </div>

      <ul className="AllEntries__entriesList">{renderPosts}</ul>
    </section>
  );
};

export default AllEntries;
