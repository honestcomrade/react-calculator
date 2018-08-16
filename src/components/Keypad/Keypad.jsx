import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {
  numbers = numbers.map(number => {
    return (
      <p key={number}>{number}</p>
    );
  });

  operators = operators.map(operator => {
    return (
      <p key={operator}>{operator}</p>
    );
  });

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {numbers}
      </div>
      <div className="operators-container">
        {operators}
      </div>
      <Key 
        keyAction={callOperator}
        keyType=""
        keyValue=""
      />
    </div>
  );
}

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  number: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default Keypad;