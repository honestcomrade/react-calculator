import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0',
      numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', 'ce'],
      operators: ['/', 'x', '-', '+'],
      selectedOperator: '',
      storedValue: ''
    }

    this.updateDisplay = this.updateDisplay.bind(this);
  };

  callOperator(props) {
    console.log('Call operation - ', props);
  }
  setOperator(props) {
    console.log('Set operation - ', props);
  }
  updateDisplay(value) {
    let { displayValue } = this.state;
    // prevent multiple '.'
    if (value === '.' && displayValue.includes('.')) {
      value = '';
    }

    if (value === 'ce') {
      // delete last char from displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is emplty string
      if (displayValue === '') {
        displayValue = '0'
      } 
    } else {
      displayValue === '0' ? displayValue = value : displayValue += value;
    }
    this.setState({displayValue})
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
