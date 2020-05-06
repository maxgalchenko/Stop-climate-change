import React from 'react';
import './DonateCardItem.scss';
import SmallText from '../../ui/SmallText/SmallText';

const DonateCardItem = ({
  firstRowText,
  secondRowText,
  className,
  isChecked,
  id,
  radioName,
  onClick,
}) => {
  return (
    <li className={'DonateCardItem'}>
      <label
        className={`DonateCardItem__label ${className}`}
        htmlFor={radioName + id}
      >
        <input
          type='radio'
          id={radioName + id}
          name={radioName}
          className='DonateCardItem__input'
          defaultChecked={isChecked}
          onClick={(e) => onClick(e)}
        />
        <span className='DonateCardItem__checkmark' />

        <b className='DonateCardItem__firstRow'>{firstRowText}</b>

        {secondRowText && <SmallText text={secondRowText} />}
      </label>
    </li>
  );
};

export default DonateCardItem;
