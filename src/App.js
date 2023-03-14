import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [previousoperand, setpreviousOperand] = useState("");

  const clickHandler = (e) => {
    if (result === "Error" || result === "Infinity") {
      setResult(e.target.name);
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const clear = (e) => {
    setResult("");
    setpreviousOperand("");
  };

  const calculate = (e) => {
    try {
      setpreviousOperand(result);
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  const deleteDigit = (e) => {
    setResult(result.slice(0, result.length - 1));
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousoperand}</div>
        <div className="current-operand">{result}</div>
      </div>
      <button className="span-two" onClick={clear}>
        AC
      </button>
      <button onClick={deleteDigit}>DEL</button>
      <button name="/" onClick={clickHandler}>
        ÷
      </button>
      <button name="1" onClick={clickHandler}>
        1
      </button>
      <button name="2" onClick={clickHandler}>
        2
      </button>
      <button name="3" onClick={clickHandler}>
        3
      </button>
      <button name="*" onClick={clickHandler}>
        *
      </button>
      <button name="4" onClick={clickHandler}>
        4
      </button>
      <button name="5" onClick={clickHandler}>
        5
      </button>
      <button name="6" onClick={clickHandler}>
        6
      </button>
      <button name="+" onClick={clickHandler}>
        +
      </button>
      <button name="7" onClick={clickHandler}>
        7
      </button>
      <button name="8" onClick={clickHandler}>
        8
      </button>
      <button name="9" onClick={clickHandler}>
        9
      </button>
      <button name="-" onClick={clickHandler}>
        -
      </button>
      <button name="." onClick={clickHandler}>
        .
      </button>
      <button name="0" onClick={clickHandler}>
        0
      </button>
      <button className="span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App;
