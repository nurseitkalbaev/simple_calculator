import React, { useState } from "react";

import "./App.css";

function App() {
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const [isSecondVal, setIsSecondVal] = useState(false);
  const [symbol, setSymbol] = useState("");

  const [screenVal, setScreenVal] = useState(0);

  const ButtonHandler = (e) => {
    const inputVal = e.target.outerText;
    let newVal = "";
    if (isSecondVal) {
      newVal = secondVal;
      newVal += inputVal;
      setSecondVal(newVal);
      console.log("secondVal is added", newVal);
    } else {
      newVal = firstVal;
      newVal += inputVal;
      setFirstVal(newVal);
      console.log("firstVal is added", newVal);
    }
    setScreenVal(newVal);
  };

  const Clear = () => {
    setFirstVal("");
    setSecondVal("");
    setIsSecondVal(false);
    setSymbol("");
    setScreenVal(0);
  };

  const SetFunc = (sym) => {
    setIsSecondVal(true);
    setSymbol(sym);
    console.log("do this", symbol);
  };
  const DoMath = () => {
    let result;
    if (symbol === "+") {
      console.log("inside");
      result = Number(firstVal) + Number(secondVal);
    }
    if (symbol === "-") {
      result = Number(firstVal) - Number(secondVal);
    }
    if (symbol === "x") {
      result = Number(firstVal) * Number(secondVal);
    }
    if (symbol === "/") {
      result = Number(firstVal) / Number(secondVal);
    }
    if (result === undefined) {
      setScreenVal(0);
    } else {
      setScreenVal(result);
    }

    setFirstVal("");
    setSecondVal("");
    setIsSecondVal(false);
    setSymbol("");
    console.log(result);
  };

  const Screen = (e) => {
    setScreenVal();
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="result"
          onChange={(e) => {
            Screen(e);
          }}
        >
          {screenVal}
        </div>

        <div className="clear" onClick={Clear}>
          clear
        </div>
        <div
          className="divide"
          onClick={(e) => {
            SetFunc(e.target.outerText);
          }}
        >
          /
        </div>

        <div
          className="seven"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          7
        </div>
        <div
          className="eight"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          8
        </div>
        <div
          className="nine"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          9
        </div>
        <div
          className="multiply"
          onClick={(e) => {
            SetFunc(e.target.outerText);
          }}
        >
          x
        </div>

        <div
          className="four"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          4
        </div>
        <div
          className="five"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          5
        </div>
        <div
          className="six"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          6
        </div>
        <div
          className="minus"
          onClick={(e) => {
            SetFunc(e.target.outerText);
          }}
        >
          -
        </div>

        <div
          className="one"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          1
        </div>
        <div
          className="two"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          2
        </div>
        <div
          className="three"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          3
        </div>
        <div
          className="plus"
          onClick={(e) => {
            SetFunc(e.target.outerText);
          }}
        >
          +
        </div>

        <div
          className="zero"
          onClick={(e) => {
            ButtonHandler(e);
          }}
        >
          0
        </div>
        <div className="dot">.</div>
        <div className="equal" onClick={DoMath}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
