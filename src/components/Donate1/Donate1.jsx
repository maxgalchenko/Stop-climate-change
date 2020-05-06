import React from 'react';
import './Donate1.scss';
import PencilTitle from '../../ui/PencilTitle/PencilTitle';
import DonateCardItem from '../DonateCardItem/DonateCardItem';
import { Link } from 'react-router-dom';
import ButtonRound from '../../ui/ButtonRound/ButtonRound';

const Donate1 = () => {
  const dataDonateAmount = [
    {
      firstRowText: '$10',
      className: 'selectedLabel',
      isChecked: true,
      secondRowText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, laudantium.',
    },
    {
      firstRowText: '$25',
      secondRowText:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, asperiores.',
    },
    {
      firstRowText: '$50',
      secondRowText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nostrum.',
    },
  ];

  const renderDonateAmountList = dataDonateAmount.map(
    ({ firstRowText, secondRowText, className, isChecked }, index) => (
      <DonateCardItem
        key={index}
        firstRowText={firstRowText}
        secondRowText={secondRowText}
        className={className}
        isChecked={isChecked}
        id={index + 1}
        radioName='donateAmount'
        onClick={(e) => onLabelClick(e, 'donateAmount')}
      />
    )
  );

  const dataDonatePeriod = [
    {
      className: 'selectedLabel',
      isChecked: true,
      firstRowText: 'Monthly',
    },
    {
      firstRowText: 'One time',
    },
  ];

  const renderDonatePeriodList = dataDonatePeriod.map(
    ({ firstRowText, className, isChecked }, index) => (
      <DonateCardItem
        key={index}
        firstRowText={firstRowText}
        className={className}
        isChecked={isChecked}
        id={index + 1}
        radioName='donatePeriod'
        onClick={(e) => onLabelClick(e, 'donatePeriod')}
      />
    )
  );

  const onLabelClick = (e, classList) => {
    const nodeLabels = document.querySelectorAll(
      `.${classList}__list .DonateCardItem__label`
    );
    const arrayLabels = [...nodeLabels];
    arrayLabels.forEach((item) => (item.className = 'DonateCardItem__label'));
    e.target.parentNode.className += ' selectedLabel';
  };

  return (
    <section className='Donate1'>
      <PencilTitle text='We can Save the future' />
      <form action=''>
        <fieldset className='donateAmount'>
          <legend className='title'>Choose a donation amount</legend>
          <ul className='donateAmount__list'>{renderDonateAmountList}</ul>
        </fieldset>

        <fieldset className='donatePeriod'>
          <legend className='title'>Choose a donation frequency</legend>
          <ul className='donatePeriod__list'>{renderDonatePeriodList}</ul>
        </fieldset>

        <div className='buttonsWrap'>
          <Link to='/aboutUs/' className='cancel-btn'>
            Cancel
          </Link>
          <ButtonRound text='Go to checkout' to='/donate/checkout' />
        </div>
      </form>
    </section>
  );
};

export default Donate1;
