import React, { useState } from 'react';
import '../assets/styles.css';

const Calculator = () => {
    const [inputType, setInputType] = useState('text');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const add = (numbers) => {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        let numberString = numbers;

        // Replace '\n' with an actual newline character
        numberString = numberString.replace(/\\n/g, '\n');

        // Check for custom delimiter
        if (numberString.startsWith('//')) {
            const delimiterEndIndex = numberString.indexOf('\n');
            delimiter = numberString.substring(2, delimiterEndIndex);
            numberString = numberString.substring(delimiterEndIndex + 1);
        }

        // Split numbers by the delimiter and actual newline
        const nums = numberString.split(new RegExp(`[${delimiter}\n]`)).map(Number);

        // Check for negative numbers
        const negatives = nums.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        return nums.reduce((sum, num) => sum + num, 0);
    }

    const calculate = () => {
        try {
            const result = add(inputValue);
            setResult(`Result: ${result}`);
        } catch (error) {
            setResult(error.message);
        }
    }

    const toggleInput = () => {
        setInputType(inputType === 'text' ? 'textarea' : 'text');
    }

    return (
        <div className="calculator-container">
            <h1>String Calculator</h1>
            <button className="toggle-button" onClick={toggleInput}>
                Switch to {inputType === 'text' ? 'Textarea' : 'Text Field'}
            </button>
            {inputType === 'text' ? (
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input-field"
                    placeholder="Enter numbers"
                />
            ) : (
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input-field"
                    placeholder="Enter numbers with optional delimiters"
                    style={{ height: '100px' }}
                />
            )}
            <button onClick={calculate}>Calculate</button>
            <div className="result">{result}</div>
        </div>
    );
};

export default Calculator;
