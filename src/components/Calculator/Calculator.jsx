import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0',
      numbers: [],
      operators: [],
      selectedOperator: null,
      storedValue: null
    }
  };

  callOperator() {
    console.log('Call operation');
  }
  setOperator() {
    console.log('Set operation');
  }
  updateDisplay() {
    console.log('Update display');
  }
  render() {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad 
          callOperator={this.callOperator} 
          numbers={numbers} 
          operators={operators} 
          setOperator={this.setOperator} 
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
