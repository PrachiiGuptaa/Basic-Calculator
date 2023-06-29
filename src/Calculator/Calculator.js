import React, { useState } from 'react';
import styles from './Calculator.module.css'

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    const addition = parseFloat(num1) + parseFloat(num2);
    setResult(addition);
  };

  const handleSub = () => {
    const subtraction = parseFloat(num1) - parseFloat(num2);
    setResult(subtraction);
  };

  const handleMul = () => {
    const multiplication = parseFloat(num1) * parseFloat(num2);
    setResult(multiplication);
  };

  const handleDiv = () => {
    const division = parseFloat(num1) / parseFloat(num2);
    setResult(division);
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(0);
  };

  return (
    <div className={styles.calculator}>
      <h2>Calculator</h2>
      <input
        type="text"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /><br/>
      <input
        type="text"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /><br/>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Subtract</button>
      <button onClick={handleMul}>Multiply</button>
      <button onClick={handleDiv}>Divide</button> <br/>
      <button onClick={handleClear}>Clear</button>
      <p>Result: {result}</p>
    </div>
  );
}
