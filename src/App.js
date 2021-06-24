import "./App.css";
import React, { useState } from "react";
const colorList = ["red", "green", "yellow", "blue"];
const App = () => {
  let [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log(counter);
    document.body.style.backgroundColor = colorList[counter];
    setCounter(counter + 1);
    if (counter === colorList.length - 1) {
      setCounter((counter = 0));
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
};

export default App;
