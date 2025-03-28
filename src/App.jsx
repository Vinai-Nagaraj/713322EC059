import React, { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num2 !== 0 ? num1 / num2 : 'Error (Division by zero)');
        break;
      default:
        setResult('Invalid operation');
    }
  };

  const handleReset = () => {
    setInput1('');
    setInput2('');
    setOperation('');
    setResult('');
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Enter first number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="">Select operation</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;