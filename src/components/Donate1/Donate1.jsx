import React from 'react';
import './Donate1.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import SmallText from '../../ui/SmallText/SmallText';

const Donate1 = () => {
  const dataDonateAmount = [
    {
      amount: '10',
      className: 'donateAmount__selectedLabel',
      isChecked: true,
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laudantium.',
    },
    {
      amount: '25',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, asperiores.',
    },
    {
      amount: '50',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nostrum.',
    },
  ];

  const renderDonateAmountList = dataDonateAmount.map(
    ({ amount, text, className, isChecked }, index) => (
      <li className={'donateAmount__item'} key={index}>
        <label
          className={`donateAmount__label ${className}`}
          htmlFor={'amountRadioButton' + (index + 1)}
        >
          <input
            type='radio'
            id={'amountRadioButton' + (index + 1)}
            name='donateAmount'
            className='donateAmount__input'
            defaultChecked={isChecked}
            onClick={(e) => onLabelClick(e)}
          />
          <span className='donateAmount__checkmark' />

          <b className='donateAmount__price'>{'$' + amount}</b>
          <SmallText text={text} />
        </label>
      </li>
    )
  );

  const onLabelClick = (e) => {
    const nodeLabels = document.querySelectorAll('.donateAmount label');
    const arrayLabels = [...nodeLabels];
    arrayLabels.forEach((item) => (item.className = 'donateAmount__label'));
    e.target.parentNode.className += ' donateAmount__selectedLabel';
  };

  return (
    <section className='Donate1'>
      <PencilTitle text='We can Save the future' />
      <form action=''>
        <fieldset className='donateAmount'>
          <legend className='donateAmount__title'>
            Choose a donation amount
          </legend>
          <ul className='donateAmount__list'>{renderDonateAmountList}</ul>
        </fieldset>
      </form>
    </section>
  );
};

export default Donate1;
