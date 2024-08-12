import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isTextarea, setIsTextarea] = useState(true);

  const add = (numbers) => {
    if (numbers.trim() === "") return 0;

    let delimiter = ",";
    let numbersWithoutDelimiter = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      if (parts.length < 2) {
        throw new Error("Invalid delimiter format");
      }
      delimiter = parts[0].substring(2);
      numbersWithoutDelimiter = parts[1];
    }

    const numArray = numbersWithoutDelimiter.split(
      new RegExp(`[${delimiter}\n]`)
    );
    const negatives = numArray.filter((num) => parseInt(num, 10) < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  };

  const calculate = () => {
    try {
      const result = add(input);
      setResult(`Result: ${result}`);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <button onClick={() => setIsTextarea(true)}>Switch to Textarea</button>
      <button onClick={() => setIsTextarea(false)}>Switch to Text Field</button>
      {isTextarea ? (
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
      ) : (
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
        />
      )}
      <button onClick={calculate}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
