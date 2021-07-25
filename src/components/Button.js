import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, value, onClickHandler }) => {
  console.log(value);
  return (
    <span onClick={onClickHandler} className='btn'>
      <span className='material-icons ' id={id}>
        credit_card
      </span>
      {value}
    </span>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default Button;
