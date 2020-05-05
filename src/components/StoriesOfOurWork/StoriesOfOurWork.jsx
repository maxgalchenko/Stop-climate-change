import React, { useState, useEffect } from 'react';
import './StoriesOfOurWork.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';
import postImg1 from './images/post1.jpg';
import postImg2 from './images/post2.jpg';
import BigTitle from '../../ui/BigTitle/BigTitle';

const StoriesOfOurWork = () => {
  const [selectedPost, setSelectedPost] = useState('CLAUDINE, NIGERIA');

  useEffect(() => {
    const buttonsNodes = document.querySelectorAll(
      '.StoriesOfOurWork .StoriesOfOurWork__buttonsList button'
    );
    const buttonsArray = [...buttonsNodes];
    buttonsArray.forEach((item) => (item.className = ''));

    const findSelectedButton = () =>
      buttonsArray.find((item) => item.innerHTML === selectedPost);

    const selectedButton = findSelectedButton();
    selectedButton.className = 'selectedButton';
  }, [selectedPost]);

  const dataButtonsList = [
    'CLAUDINE, NIGERIA',
    'ZAINAB, NIGERIA',
    'CARITAS, RWANDA',
    'EUPHRASIE, RWANDA',
    'UNIS, SUDAN',
    'REGINA, SUDAN',
  ];

  const dataAllPosts = [
    {
      img1: postImg1,
      cardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis excepturi sunt expedita unde officia rem,',
      img2: postImg2,
      title: 'CLAUDINE, NIGERIA',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis excepturi sunt expedita unde officia rem, nihil ipsam libero optio ab saepe adipisci dolores quos perferendis quaerat temporibus quo sint dolorum ad.',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non reprehenderit nobis fuga incidunt voluptatum veritatis aliquam, quas facere tenetur. Ab repellendus nihil atque eaque ducimus porro animi facilis at.',
    },
    {
      img1: postImg2,
      cardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non reprehenderit nobis fuga incidunt voluptatum veritatis aliquam, quas facere tenetur. Ab repellendus nihil atque eaque ducimus porro animi facilis at.',
      img2: postImg1,
      title: 'ZAINAB, NIGERIA',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ratione, iure iusto dicta facilis laborum ullam qui amet ipsa itaque impedit animi accusamus magni cum totam earum quae assumenda.',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ratione, iure iusto dicta facilis laborum ullam qui amet ipsa itaque impedit animi accusamus magni cum totam earum quae assumenda.',
    },
    {
      img1: postImg1,
      cardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ratione, iure iusto dicta facilis laborum ullam qui amet ipsa itaque impedit animi accusamus magni cum totam earum quae assumenda.',
      img2: postImg2,
      title: 'CARITAS, RWANDA',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem ratione, iure iusto dicta facilis laborum ullam qui amet ipsa itaque impedit animi accusamus magni cum totam earum quae assumenda.',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non reprehenderit nobis fuga incidunt voluptatum veritatis aliquam, quas facere tenetur. Ab repellendus nihil atque eaque ducimus porro animi facilis at.',
    },
    {
      img1: postImg2,
      cardText:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sapiente, iure beatae optio fugiat ad debitis incidunt officiis! Sed itaque molestias quod sit fugit dolor architecto ad? Obcaecati, dolore magnam.',
      img2: postImg1,
      title: 'EUPHRASIE, RWANDA',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non reprehenderit nobis fuga incidunt voluptatum veritatis aliquam, quas facere tenetur. Ab repellendus nihil atque eaque ducimus porro animi facilis at.',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis excepturi sunt expedita unde off',
    },
    {
      img1: postImg1,
      cardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias sunt, itaque culpa aperiam illo, doloribus, debitis provident eos laborum enim? Possimus, qui deserunt ex reprehenderit molestiae perspiciatis libero voluptate!',
      img2: postImg2,
      title: 'UNIS, SUDAN',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis excepturi sunt expedita unde officia rem, nihil ipsam libero optio ab saepe adipisci dolores quos perferendis quaerat temporibus quo sint doloru',
      text2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias sunt, itaque culpa aperiam illo, doloribus, debitis provident eos laborum enim? Possimus, qui deserunt ex reprehenderit molestiae perspiciatis libero voluptate!',
    },
    {
      img1: postImg2,
      cardText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam labore distinctio vero qui possimus voluptate iste error accusantium, vitae in tenetur harum, repudiandae architecto similique libero voluptas reiciendis ipsa?',
      img2: postImg1,
      title: 'REGINA, SUDAN',
      text1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam labore distinctio vero qui possimus voluptate iste error accusantium, vitae in tenetur harum, repudiandae architecto similique libero voluptas reiciendis ipsa?',
      text2:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sapiente, iure beatae optio fugiat ad debitis incidunt officiis! Sed itaque molestias quod sit fugit dolor architecto ad? Obcaecati, dolore magnam.',
    },
  ];

  const dataSelectedPost = dataAllPosts.find(
    (item) => item.title === selectedPost
  );

  const renderSelectedPost = ({
    img1,
    img2,
    text1,
    text2,
    cardText,
    title,
  }) => (
    <>
      <img src={img1} className='StoriesOfOurWork__img1' alt='' />
      <p className='StoriesOfOurWork__card'>{cardText}</p>
      <img src={img2} className='StoriesOfOurWork__img2' alt='' />
      <BigTitle text={title} />
      <div className='StoriesOfOurWork__text'>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </>
  );

  const onNextStoryButton = () => {
    const selectedButtonIndex = dataButtonsList.indexOf(selectedPost);
    let nextIndex = selectedButtonIndex + 1;
    if (nextIndex + 1 > dataButtonsList.length) {
      nextIndex = 0;
    }
    setSelectedPost(dataButtonsList[nextIndex]);
  };

  const renderButtonsList = dataButtonsList.map((item, index) => (
    <li key={index}>
      <button onClick={(e) => onButtonClick(e)}>{item}</button>
    </li>
  ));

  const onButtonClick = (e) => {
    setSelectedPost(e.target.innerHTML);
  };

  return (
    <section className='StoriesOfOurWork'>
      <PencilTitle text='STORIES OF OUR WORK' />
      <ul className='StoriesOfOurWork__buttonsList'>{renderButtonsList}</ul>
      <article>
        {renderSelectedPost(dataSelectedPost)}
        <ButtonRound onClick={() => onNextStoryButton()} text='Next story' />
      </article>
    </section>
  );
};

export default StoriesOfOurWork;
