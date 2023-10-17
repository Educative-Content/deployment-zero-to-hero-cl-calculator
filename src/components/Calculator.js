import React, { useState } from 'react';
import './Calculator.css'

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(digit));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondValue) {
      setDisplayValue('.');
      setWaitingForSecondValue(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearInput = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setWaitingForSecondValue(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === '') {
      setFirstValue(inputValue);
      setWaitingForSecondValue(true);
      setOperator(nextOperator);
    } else if (operator) {
      const result = calculate(firstValue, inputValue, operator);

      setDisplayValue(String(result));
      setFirstValue(result);
      setWaitingForSecondValue(true);
      setOperator(nextOperator);
    }
  };

  const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={displayValue} readOnly />
      <div className="keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button onClick={clearInput}>AC</button>
            <button onClick={() => inputDigit(0)}>0</button>
            <button onClick={inputDecimal}>.</button>
          </div>
          <div className="digit-keys">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
              <button key={digit} onClick={() => inputDigit(digit)}>
                {digit}
              </button>
            ))}
          </div>
        </div>
        <div className="operator-keys">
          <button onClick={() => performOperation('+')}>+</button>
          <button onClick={() => performOperation('-')}>-</button>
          <button onClick={() => performOperation('*')}>x</button>
          <button onClick={() => performOperation('/')}>÷</button>
          <button onClick={() => performOperation('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
