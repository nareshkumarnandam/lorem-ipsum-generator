import React, { useState } from "react";
import './App.css';
import text from "./TextData";

function App() {
  const [count , setCount] = useState(0);
  const [textData, setTextData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
      alert(" Ayyo ! you know that you wrote negative input 😵");
    }
    if (count > 8) {
      amount = 8;
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀"
      );
    }
    setTextData(text.slice(0, amount));
  };
  return (
    <div className="app">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="numberOfParas">paragraphs:</label>
        <input
          type="number"
          id="numberOfParas"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <div className="text-generated">
        {textData.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
