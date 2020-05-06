import React from 'react';
import './DonateInput.scss';

const DonateInput = ({
  labelText,
  inputType,
  name,
  baseClassName,
  placeholder,
  maxLength,
}) => {
  return (
    <label
      htmlFor={name}
      className={`DonateInput ${baseClassName}${name}-label`}
    >
      {labelText}
      <input
        type={inputType}
        placeholder={placeholder || labelText}
        name={name}
        id={name}
        className={baseClassName + name}
        required
        maxLength={maxLength}
      />
    </label>
  );
};

export default DonateInput;
